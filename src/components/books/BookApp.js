import React, { Component } from 'react';

import BookList from '../../containers/books/BookList';
import BookDetail from '../../containers/books/BookDetail';

export default class BookApp extends Component
{
    render()
    {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        );
    }
}