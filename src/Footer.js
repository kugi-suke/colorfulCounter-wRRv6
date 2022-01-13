import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Footer.css';

type Props = {
  initialText: string,
};

function Footer({ initialText }: Props) {
    const [text, setText] = useState(initialText);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            setText(res.data.title)
        })
        .catch(() => {
            setText(initialText)
            console.log('ERROR! jsonplaceholder has 1~200 data...')
        })
    });

    return (
        <div className="Todos">
          <p>from jsonplaceholeder/todos</p>
          <p>{text}</p>
        </div>
    );
};

Footer.defaultProps = {
  initialText: "",
};

export default Footer;