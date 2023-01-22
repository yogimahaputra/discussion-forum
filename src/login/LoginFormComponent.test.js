/**
 * skenario testing
 *
 * - LoginFormComponent component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 */
import React from 'react';
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginFormComponent from "./LoginFormComponent"
import '@testing-library/jest-dom';

describe('LoginFormComponent', () => {
    it('should handle email typing correctly', async () => {
        // Arrange
        render(<LoginFormComponent login={() => {}}/>)
        const emailInput = screen.getByPlaceholderText('Email');
        // Action
        userEvent.type(emailInput, 'usernametest@gmail.com')
        // Assert
        expect(emailInput).toHaveValue('usernametest@gmail.com')
    })

    it('should handle password typing correctly', async () => {
        // Arrange
        render(<LoginFormComponent login={() => {}}/>)
        const passwordInput = screen.getByPlaceholderText('Password');
        // Action
        userEvent.type(passwordInput, '12345678')
        // Assert
        expect(passwordInput).toHaveValue('12345678')
    })
})