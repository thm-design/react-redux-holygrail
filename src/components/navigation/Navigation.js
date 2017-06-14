import './css/Navigation.css';

import React, {PureComponent} from 'react';

const navProps = [
    {
        href: '/',
        materialIconName: 'home',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'public',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'person',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'panorama',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'beach_access',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'book',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    },
    {
        href: '/',
        materialIconName: 'shopping_cart',
        text: 'menu item'
    }
];

export default class Navigation extends PureComponent {
    render() {
        return (
            <nav className="mainNav">
                <div className="navInner">
                    <ul>
                        {navProps.map((navitem, i) => {
                            const {href, materialIconName, text} = navitem;
                            return (
                                <li key={i}>
                                    <a href={href}>
                                        <i className="material-icons md-light md-18">{materialIconName}</i>
                                        <span>{text}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}
