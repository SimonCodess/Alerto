![logo](https://github.com/SimonCodess/Alerto/blob/main/AlertoLogo.png?raw=true)
# Alerto Documentation

Alerto is a lightweight JavaScript library that helps you create and display alert notifications on your website. It comes in two versions: one with predefined CSS styles and another without, giving you the flexibility to customize the appearance according to your needs.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Customizing Styles](#customizing-styles)
-   [Error Handling](#error-handling)
-   [Queuing System](#queuing-system)
-   [Versions](#versions)
-   [Conclusion](#conclusion)

## Installation

Include the JavaScript code from the desired version (with or without predefined CSS) in your project.

## Usage

### Function: `showAlert(text, duration, state, animation, animationDuration, position)`

Displays an alert message on the page.

#### Parameters:

-   **`text`** (string): The text content of the alert message.
-   **`duration`** (number): Duration in milliseconds the alert will be displayed after fade-in animation.
-   **`state`** (string): Visual appearance of the alert. Values: `"primary"`, `"success"`, `"danger"`, `"warning"`, `"info"`.
-   **`animation`** (string): Animation type. Values: `"fade-in-out"` or `"fade-up-out"`.
-   **`animationDuration`** (string): Duration of fade animations (e.g., `"0.5s"`).
-   **`position`** (string, optional): Position of the alert. Values: `"bottom"` or `"top"`. Default: `"bottom"`.

#### Example:


`showAlert('Success Message!', 3000, 'success', 'fade-in-out', '1s', 'top');` 

## Customizing Styles

### With Predefined CSS:

The predefined CSS version provides default styles for the different states and can be customized by modifying the corresponding CSS classes.

### Without Predefined CSS:

The version without predefined CSS allows complete control over the styling by defining your own CSS for the alerts.

## Error Handling

Alerto performs validation on the provided parameters and logs descriptive error messages to the console if an invalid value is detected.

## Queuing System

Alerts are displayed one at a time, with subsequent alerts being queued and displayed in the order they were called.

## Versions

-   **With Predefined CSS**: Offers out-of-the-box styling with customizable options.
-   **Without Predefined CSS**: Gives full control over styling for developers who prefer complete customization.

## Conclusion

Alerto provides a simple and flexible way to incorporate alerts into a webpage, with options to suit various design preferences and use cases.

For further assistance or customization, please refer to the provided code or contact support.
