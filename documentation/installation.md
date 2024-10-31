```markdown project="Aether Terminal" file="getting-started.md"
...
```

./aether_terminal

```plaintext

You should see the Aether Terminal welcome screen:

```

```plaintext
_    _____ _____ _   _ _____ ____  
```

/ \  | ****|*   _| | | | ****|  _ \
/ _ \ |  *|   | | | |*| |  *| | |*) |
/ ___ | |***  | | |  _  | |***|  _ <
/*/   __****| |*| |*| |_|**__*|*| _\

Welcome to Aether Terminal v1.0
Type 'help' for a list of available commands

```plaintext

## Basic Commands

Here are some essential commands to get you started with Aether Terminal:

- `help`: Displays a list of all available commands and their brief descriptions.
- `cls`: Clears the screen, giving you a fresh terminal view.
- `echo <text>`: Prints the specified text to the console.
- `time`: Displays the current system time.
- `exit`: Closes the Aether Terminal session.

Example usage:

```

λ help
Available commands:
help       - Displays this help message
cls        - Clears the screen
echo       - Prints text to the console
time       - Displays the current system time
exit       - Exits Aether Terminal
...

λ echo Hello, Aether Terminal!
Hello, Aether Terminal!

λ time
Current time: 2023-05-24 15:30:45

```plaintext

## Exploring Features

Aether Terminal offers a wide range of advanced features. Here are some key areas to explore:

### 1. File Operations

- `create <filename>`: Creates a new file.
- `delete <filename>`: Deletes an existing file.
- `list`: Lists all files in the current directory.
- `readfile <filename>`: Displays the contents of a file.
- `writefile <filename> <text>`: Writes text to a file.

Example:

```

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


```plaintext

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

1. **Themes**: Change the color scheme of your terminal.
```

λ theme
Available themes: 1) Dark, 2) Light, 3) Custom
Enter your choice:

```plaintext

2. **Aliases**: Create shortcuts for frequently used commands.
```

λ setalias ll list
Alias set: ll -> list

```plaintext

3. **Custom Prompt**: Modify your command prompt.
```

λ setprompt "Aether > "
Prompt updated.
Aether >

```plaintext

## Next Steps

To make the most of Aether Terminal:

1. Explore the full [Command Reference](command-reference.md) to learn about all available commands.
2. Check out the [Customization Guide](customization.md) for advanced personalization options.
3. Read the [Features Documentation](features.md) to discover all capabilities of Aether Terminal.
4. Join our [community forum](https://aether-terminal.com/forum) to share tips and get help from other users.

Enjoy using Aether Terminal, and don't hesitate to reach out if you have any questions or feedback!
```