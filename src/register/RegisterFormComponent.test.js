/**
 * skenario testing
 *
 * - LoginFormComponent component
 *   - should handle email typing correctly
 *   - should handle name typing correctly
 *   - should handle password typing correctly
 */
import React from 'react';
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom';
import RegsisterFormComponent from './RegsisterFormComponent';

describe('LoginFormComponent', () => {
    it('should handle email typing correctly', async () => {
        // Arrange
        render(<RegsisterFormComponent register={() => {}}/>)
        const emailInput = screen.getByPlaceholderText('Email');
        // Action
        userEvent.type(emailInput, 'usernametest@gmail.com')
        // Assert
        expect(emailInput).toHaveValue('usernametest@gmail.com')
    })

    it('should handle name typing correctly', async () => {
        // Arrange
        render(<RegsisterFormComponent register={() => {}}/>)
        const nameInput = screen.getByPlaceholderText('name');
        // Action
        userEvent.type(nameInput, 'nameuser')
        // Assert
        expect(nameInput).toHaveValue('nameuser')
    })

    it('should handle password typing correctly', async () => {
        // Arrange
        render(<RegsisterFormComponent register={() => {}}/>)
        const PasswordInput = screen.getByPlaceholderText('Password');
        // Action
        userEvent.type(PasswordInput, 'Passworduser')
        // Assert
        expect(PasswordInput).toHaveValue('Passworduser')
    })
})