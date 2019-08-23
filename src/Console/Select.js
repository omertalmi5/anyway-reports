import React from 'react';
import _ from 'lodash';
import deburr from 'lodash/deburr';

import match from 'autosuggest-highlight/match';
import Autosuggest from 'react-autosuggest';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing(2),
    },
}));

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map(part => (
                    <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
                ))}
            </div>
        </MenuItem>
    );
}

function Select(props) {
    const [stateSuggestions, setSuggestions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    let suggestions = _.map(props.schools, (school) => {
        let yishuvName = school.yishuv_name.startsWith('"')
            ? school.yishuv_name.substr(1, school.yishuv_name.length)
            : school.yishuv_name;
        yishuvName = school.yishuv_name.endsWith('"')
            ? yishuvName.substr(0, yishuvName-1)
            : yishuvName;
        return {
            label: _.size(yishuvName)
                ? `${school.school_name} (${yishuvName})`
                : school.school_name,
            id: school.school_id
        };
    });
    const classes = useStyles();

    function renderInputComponent(inputProps) {
        const { classes, inputRef = () => {}, ref, ...other } = inputProps;

        return (
            <TextField
                fullWidth
                InputProps={{
                    inputRef: node => {
                        ref(node);
                        inputRef(node);
                    },
                    classes: {
                        input: classes.input,
                    },
                }}
                {...other}
            />
        );
    }

    function getSuggestions(value) {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        return inputLength === 0
            ? []
            : _(suggestions).filter(suggestion => {
                const keep = count < 5 && suggestion.label.includes(inputValue);

                if (keep) {
                    count += 1;
                }

                return keep;
            })
                .uniqBy('id')
                .value();
    }

    const handleSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const handleSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const handleChange = (event, { newValue }) => {
        setInputValue(newValue);
    };

    const onSuggestionSelected = (event, {suggestion}) => {
        props.setSelectedId(suggestion.id);
    };

    const autosuggestProps = {
        renderInputComponent,
        suggestions: stateSuggestions,
        onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        onSuggestionSelected,
        getSuggestionValue,
        renderSuggestion,
    };

    return (
        <Autosuggest
            {...autosuggestProps}
            inputProps={{
                classes,
                id: 'react-autosuggest-simple',
                placeholder: 'הקלד כאן מוסד לימודים הקרוב לביתך...',
                value: inputValue,
                onChange: handleChange,
                direction: 'rtl'
            }}
            theme={{
                container: classes.container,
                suggestionsContainerOpen: classes.suggestionsContainerOpen,
                suggestionsList: classes.suggestionsList,
                suggestion: classes.suggestion,
            }}
            renderSuggestionsContainer={options => (
                <Paper {...options.containerProps} square>
                    {options.children}
                </Paper>
            )}
        />
    );
}

export default Select;


