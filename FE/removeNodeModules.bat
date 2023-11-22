@echo off
setlocal

set "folderToDelete=D:\0Business\ML\WOS\LinkWeb\FE\node_modules"

if exist "%folderToDelete%" (
    echo Deleting folder "%folderToDelete%" and its contents...
    rmdir /s /q "%folderToDelete%"
    if errorlevel 1 (
        echo Failed to delete the folder.
    ) else (
        echo Folder and its contents deleted successfully.
    )
) else (
    echo The folder "%folderToDelete%" does not exist.
)

endlocal
