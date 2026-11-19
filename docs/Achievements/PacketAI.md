---
sidebar_position: 4
---

# Packet AI

### Private, fully offline personal AI assistant

**Version:** 1.0.0+1 · **Framework:** Flutter · **Mode:** Fully offline / on-device

A private, fully offline personal AI assistant built with Flutter. It combines on-device LLM inference, on-device speech recognition, text-to-speech, audio playback, PDF extraction, file handling, and local SQLite storage to deliver a complete AI assistant experience without relying on cloud services.

## Tech Stack

### Mobile & UI
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white) ![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white) ![Cupertino%20Icons](https://img.shields.io/badge/Cupertino%20Icons-000000?style=flat-square&logo=apple&logoColor=white) ![Material%20Design](https://img.shields.io/badge/Material%20Design-757575?style=flat-square&logo=materialdesign&logoColor=white)

### AI, Speech & NLP
![Sherpa%20ONNX](https://img.shields.io/badge/Sherpa%20ONNX-FF6C37?style=flat-square) ![llamadart](https://img.shields.io/badge/llamadart-8A2BE2?style=flat-square) ![Thermion%20Flutter](https://img.shields.io/badge/Thermion%20Flutter-7B68EE?style=flat-square) ![Flutter%20TTS](https://img.shields.io/badge/Flutter%20TTS-00A8E8?style=flat-square)

### Audio & Media
![Record](https://img.shields.io/badge/Record-000000?style=flat-square) ![Audioplayers](https://img.shields.io/badge/Audioplayers-FF3399?style=flat-square)

### Storage, Files & PDF
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![Path%20Provider](https://img.shields.io/badge/Path%20Provider-2E8555?style=flat-square) ![File%20Picker](https://img.shields.io/badge/File%20Picker-FFB800?style=flat-square) ![pdfrx](https://img.shields.io/badge/pdfrx-FF0000?style=flat-square) ![Archive](https://img.shields.io/badge/Archive-4EAA25?style=flat-square) ![XML](https://img.shields.io/badge/XML-000000?style=flat-square)

### Networking & Utilities
![HTTP](https://img.shields.io/badge/http-0052CC?style=flat-square) ![Vector%20Math](https://img.shields.io/badge/Vector%20Math-6B4FBB?style=flat-square) ![Android%20Intent%20Plus](https://img.shields.io/badge/Android%20Intent%20Plus-3DDC84?style=flat-square&logo=android&logoColor=white)

## Key Features

- Fully offline personal AI assistant — no cloud dependency for core functionality
- On-device LLM inference using `llamadart`
- On-device speech recognition with `sherpa_onnx`
- Text-to-speech output using `flutter_tts`
- Audio recording and playback via `record` and `audioplayers`
- Local data persistence with `sqflite`
- File picking, PDF parsing (`pdfrx`), archive handling, and XML processing
- Built with Flutter using Material Design and Cupertino icons
- Version 1.0.0+1, targeting Dart SDK `^3.13.2`
