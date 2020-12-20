import React from 'react';

export default function LabelIndication(props) {
    const {indication} = props;
    return (
        <label>{indication}</label>
    );
}