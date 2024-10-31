Here's the cleaned-up version of your installation guide:

---

# Installation Guide

After installing, launch Aether Terminal:

```bash
./aether_terminal
```

This should bring up the Aether Terminal welcome screen:

```
 _    _____ _____ _   _ _____ ____
/ \  |  ___| ____| | | |  ___|  _ \
/ _ \ | |_  |  _| | |_| | |_  | |_) |
/ ___ \|  _| | |___|  _  |  _| |  _ <
/_/   \_\_|   |_____|_| |_|_|   |_| \_\

Welcome to Aether Terminal v1.0
Type 'help' for a list of available commands
```

## Basic Commands

Here are some essential commands to get you started with Aether Terminal:

- `help`: Displays a list of all available commands and their brief descriptions.
- `cls`: Clears the screen, giving you a fresh terminal view.
- `echo <text>`: Prints the specified text to the console.
- `time`: Displays the current system time.
- `exit`: Closes the Aether Terminal session.

Example usage:

```bash
λ help
Available commands:
help       - Displays this help message
cls        - Clears the screen
echo       - Prints text to the console
time       - Displays the current system time
exit       - Exits Aether Terminal

λ echo Hello, Aether Terminal!
Hello, Aether Terminal!

λ time
Current time: 2023-05-24 15:30:45
```

## Exploring Features

### 1. File Operations

- `create <filename>`: Creates a new file.
- `delete <filename>`: Deletes an existing file.
- `list`: Lists all files in the current directory.
- `readfile <filename>`: Displays the contents of a file.
- `writefile <filename> <text>`: Writes text to a file.

Example:

```bash
λ create myfile.txt
File 'myfile.txt' created.

λ writefile myfile.txt Hello, this is a test file.
Text written to file 'myfile.txt'.

λ readfile myfile.txt
Hello, this is a test file.

λ list
Files in current directory:
- myfile.txt
- aether_config.json
- ...
```

### 2. System Information

- `sysinfo`: Displays detailed system information.
- `ps`: Shows running processes.
- `network`: Displays network information.

### 3. Utilities

- `calc`: Opens a simple calculator.
- `weather <city>`: Displays weather information for the specified city.
- `encrypt <input_file> <output_file>`: Encrypts a file.
- `decrypt <input_file> <output_file>`: Decrypts a file.

### 4. Task Management

- `schedule <delay> <command>`: Schedules a command to run after a specified delay.
- `task start <command>`: Starts a background task.
- `task list`: Lists all running background tasks.

## Customization

Aether Terminal offers various customization options to tailor your experience:

1. **Themes**:
   ```bash
   λ theme
   Available themes: 1) Dark, 2) Light, 3) Custom
   Enter your choice:
   ```

2. **Aliases**:
   ```bash
   λ setalias ll list
   Alias set: ll -> list
   ```

3. **Custom Prompt**:
   ```bash
   λ setprompt "Aether > "
   Prompt updated.
   Aether >
   ```


Enjoy using Aether Terminal, and feel free to reach out if you have any questions or feedback!