@echo off
rem Masaustune logolu "Tabanca Baglanti Rehberi" kisayolu olusturur.
rem Ag paylasiminda (\\sunucu\...) ve Turkce karakterli klasor yollarinda da calisir.
set "TABANCA_FIAM=%~dp0"
set "TABANCA_PS1=%~dp0src\kisayol_olustur.ps1"
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create([IO.File]::ReadAllText($env:TABANCA_PS1, [Text.Encoding]::UTF8)))"
if errorlevel 1 pause
