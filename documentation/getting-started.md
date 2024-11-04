# Getting Started with Aether Terminal

## Installation

```bash
git clone https://github.com/Aetherapp-ventures/aether-terminal.git
```

## Installation Steps

### Windows

1. If you downloaded the pre-built binary:
   - Run the `Aether_terminal.exe` file

2. If you're building from source:
   ```bash
   mkdir build
   cd build
   cmake ..
   cmake --build . --config Release
   ```
   The executable will be in the `build\Release` directory.

### macOS

1. For pre-built binary:
   - Open the downloaded `AetherTerminal.dmg` file
   - Drag the Aether Terminal app to your Applications folder

2. For building from source:
   ```bash
   mkdir build
   cd build
   cmake ..
   make
   ```
   The executable will be in the `build` directory.

### Linux

1. For pre-built binary:
   ```bash
   tar -xzvf AetherTerminal-Linux.tar.gz
   ```
   Move the extracted directory to your preferred location.

2. For building from source:
   ```bash
   mkdir build
   cd build
   cmake ..
   make
   ```
   The executable will be in the `build` directory.

## Verifying the Installation

To verify that Aether Terminal has been installed correctly:

1. Open a new terminal or command prompt
2. Run the following command:
   ```bash
   aether_terminal --version
   ```
3. You should see the version number of Aether Terminal printed to the console

## Troubleshooting

If you encounter any issues during installation, try the following:

1. Ensure all [prerequisites](./prerequisites.md) are met
2. Check that you have necessary permissions (run as administrator on Windows or use `sudo` on macOS/Linux if needed)
3. Verify that your system's PATH includes the Aether Terminal installation directory
4. For build issues, make sure you have the correct versions of CMake and your C++ compiler

If problems persist, please:

- Check our [FAQ page](https://aether-terminal.com/faq)
- Visit our [community forum](https://aether-terminal.com/forum)
- Report the issue on our [GitHub repository](https://github.com/aether-terminal/aether-terminal/issues)

## Updating Aether Terminal

To update Aether Terminal to the latest version:

1. For pre-built binaries:
   - Windows: Run the update checker from the Start menu
   - macOS: Use the built-in update feature in the application
   - Linux: Download the latest version and replace the existing installation

2. For source installations:
   ```bash
   git pull origin main
   ```
   Then rebuild the project following the installation steps for your OS.

## Uninstalling

To remove Aether Terminal from your system:

- Windows: Use the "Add or remove programs" feature in Settings
- macOS: Drag the Aether Terminal app from Applications to the Trash
- Linux: Delete the Aether Terminal directory

For source installations, simply delete the cloned repository and build directory.
```
