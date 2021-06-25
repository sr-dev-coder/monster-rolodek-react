import React from 'react';
import { Card } from './../card/card.component';
import {} from './card-list.styles.css';

export const CardList = (props) => {
    return (
        <div className="card-list"> 
            {props.monsters.map(monster => (
                    <Card monster={monster} />
                )) 
            }
        </div>
    )
}; 