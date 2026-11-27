// Otomatik oluşturulur, elle düzenlemeyin. Asıl veri: tabanca_makine_veriler.json
window.TABANCA_VERI = {
  "activeBrand": "Desoutter",
  "selectedMachineId": "m_1",
  "templates": {
    "Desoutter": [
      {
        "pin": "GND",
        "block": "INPUT",
        "group": "BESLEME",
        "sig": "GND",
        "desc": "Giriş GND (0V)",
        "addr": ""
      },
      {
        "pin": "+24V",
        "block": "INPUT",
        "group": "BESLEME",
        "sig": "+24V",
        "desc": "+24V besleme (STOP kontağı buradan)",
        "addr": ""
      },
      {
        "pin": "0VE",
        "block": "INPUT",
        "group": "BESLEME",
        "sig": "0VE",
        "desc": "Harici 0V ortak — panodan gelen (-) ile köprüle",
        "addr": ""
      },
      {
        "pin": "STOP",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "STOP",
        "desc": "Durdurma girişi (+24V – STOP arası kontak)",
        "addr": ""
      },
      {
        "pin": "n.c.",
        "block": "INPUT",
        "group": "—",
        "sig": "n.c.",
        "desc": "Bağlantı yok",
        "addr": ""
      },
      {
        "pin": "1",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "CYC1",
        "desc": "Program seçimi 1",
        "addr": ""
      },
      {
        "pin": "2",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "CYC2",
        "desc": "Program seçimi 2",
        "addr": ""
      },
      {
        "pin": "3",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "CYC4",
        "desc": "Program seçimi 4",
        "addr": ""
      },
      {
        "pin": "4",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "VALSP",
        "desc": "Sıkma izni — sinyal gelince çalış komutu",
        "addr": ""
      },
      {
        "pin": "5",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "ACKNOW",
        "desc": "Hata / uyarı onayı",
        "addr": ""
      },
      {
        "pin": "6",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "SCY",
        "desc": "Çevrim başlatma",
        "addr": ""
      },
      {
        "pin": "7",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "DIR",
        "desc": "Dönüş yönü seçimi",
        "addr": ""
      },
      {
        "pin": "8",
        "block": "INPUT",
        "group": "GİRİŞ",
        "sig": "RESET",
        "desc": "Sıfırlama",
        "addr": ""
      },
      {
        "pin": "GND",
        "block": "OUTPUT",
        "group": "BESLEME",
        "sig": "GND",
        "desc": "Çıkış GND (0V)",
        "addr": ""
      },
      {
        "pin": "+24V",
        "block": "OUTPUT",
        "group": "BESLEME",
        "sig": "+24V",
        "desc": "+24V besleme",
        "addr": ""
      },
      {
        "pin": "0VE",
        "block": "OUTPUT",
        "group": "BESLEME",
        "sig": "0VE",
        "desc": "Harici 0V ortak — giriş 0VE ile köprülü",
        "addr": ""
      },
      {
        "pin": "COM1",
        "block": "OUTPUT",
        "group": "ORTAK",
        "sig": "COM1",
        "desc": "Çıkış 1–4 ortak ucu",
        "addr": ""
      },
      {
        "pin": "1",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "CYC1",
        "desc": "Seçili program geri bildirimi 1",
        "addr": ""
      },
      {
        "pin": "2",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "CYC2",
        "desc": "Seçili program geri bildirimi 2",
        "addr": ""
      },
      {
        "pin": "3",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "CYC4",
        "desc": "Seçili program geri bildirimi 4",
        "addr": ""
      },
      {
        "pin": "4",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "READY",
        "desc": "Sistem hazır",
        "addr": ""
      },
      {
        "pin": "5",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "INCYC",
        "desc": "Sıkma devam ediyor",
        "addr": ""
      },
      {
        "pin": "6",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "ACCRP",
        "desc": "Sıkma OK",
        "addr": ""
      },
      {
        "pin": "7",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "REJRP",
        "desc": "Sıkma NOK",
        "addr": ""
      },
      {
        "pin": "8",
        "block": "OUTPUT",
        "group": "ÇIKIŞ",
        "sig": "NCYOK",
        "desc": "Toplu çevrim OK",
        "addr": ""
      },
      {
        "pin": "COM2",
        "block": "OUTPUT",
        "group": "ORTAK",
        "sig": "COM2",
        "desc": "Çıkış 5–8 ortak ucu — +24V verilecek",
        "addr": ""
      }
    ],
    "FIAM": [
      {
        "pin": 1,
        "group": "OUTPUTS (A)",
        "sig": "Run",
        "desc": "Çalışıyor",
        "addr": "",
        "block": ""
      },
      {
        "pin": 2,
        "group": "OUTPUTS (A)",
        "sig": "Screw OK",
        "desc": "Vida Tamam",
        "addr": "",
        "block": ""
      },
      {
        "pin": 3,
        "group": "OUTPUTS (A)",
        "sig": "Ready",
        "desc": "Hazır",
        "addr": "",
        "block": ""
      },
      {
        "pin": 4,
        "group": "OUTPUTS (A)",
        "sig": "Reject",
        "desc": "Red",
        "addr": "",
        "block": ""
      },
      {
        "pin": 5,
        "group": "OUTPUTS (A)",
        "sig": "Screw NOK",
        "desc": "Vida Hatalı",
        "addr": "",
        "block": ""
      },
      {
        "pin": 6,
        "group": "OUTPUTS (A)",
        "sig": "Prg bit0",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 7,
        "group": "OUTPUTS (A)",
        "sig": "Prg bit1",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 8,
        "group": "OUTPUTS (A)",
        "sig": "Prg bit2",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 9,
        "group": "GROUND (C)",
        "sig": "Inputs Com",
        "desc": "Girişler Ortak (-)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 10,
        "group": "GROUND (C)",
        "sig": "Inputs Com",
        "desc": "Girişler Ortak (-)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 11,
        "group": "GROUND (C)",
        "sig": "Inputs Com",
        "desc": "Girişler Ortak (-)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 12,
        "group": "GROUND (C)",
        "sig": "Inputs Com",
        "desc": "Girişler Ortak (-)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 13,
        "group": "GROUND (C)",
        "sig": "Inputs Com",
        "desc": "Girişler Ortak (-)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 14,
        "group": "INPUTS (B)",
        "sig": "Tighten",
        "desc": "Sıkma",
        "addr": "",
        "block": ""
      },
      {
        "pin": 15,
        "group": "INPUTS (B)",
        "sig": "Untighten",
        "desc": "Gevşetme",
        "addr": "",
        "block": ""
      },
      {
        "pin": 16,
        "group": "INPUTS (B)",
        "sig": "Stop",
        "desc": "Durdurma",
        "addr": "",
        "block": ""
      },
      {
        "pin": 17,
        "group": "INPUTS (B)",
        "sig": "Unlock",
        "desc": "Kilit Açma",
        "addr": "",
        "block": ""
      },
      {
        "pin": 18,
        "group": "INPUTS (B)",
        "sig": "Sel. Seq",
        "desc": "Sekans Seçimi",
        "addr": "",
        "block": ""
      },
      {
        "pin": 19,
        "group": "INPUTS (B)",
        "sig": "Prg bit0",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 20,
        "group": "INPUTS (B)",
        "sig": "Prg bit1",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 21,
        "group": "INPUTS (B)",
        "sig": "Prg bit2",
        "desc": "Program bitleri",
        "addr": "",
        "block": ""
      },
      {
        "pin": 22,
        "group": "+24V (D)",
        "sig": "Outputs Com",
        "desc": "Çıkışlar Ortak (+24V)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 23,
        "group": "+24V (D)",
        "sig": "Outputs Com",
        "desc": "Çıkışlar Ortak (+24V)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 24,
        "group": "+24V (D)",
        "sig": "Outputs Com",
        "desc": "Çıkışlar Ortak (+24V)",
        "addr": "",
        "block": ""
      },
      {
        "pin": 25,
        "group": "+24V (D)",
        "sig": "Outputs Com",
        "desc": "Çıkışlar Ortak (+24V)",
        "addr": "",
        "block": ""
      }
    ],
    "Doğa": [
      {
        "pin": 1,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN1",
        "desc": "Tork seçimi 1",
        "addr": ""
      },
      {
        "pin": 2,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN2",
        "desc": "Tork seçimi 2",
        "addr": ""
      },
      {
        "pin": 3,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN3",
        "desc": "Tork seçimi 3",
        "addr": ""
      },
      {
        "pin": 4,
        "block": "",
        "group": "GİRİŞ",
        "sig": "START",
        "desc": "Başlat",
        "addr": ""
      },
      {
        "pin": 5,
        "block": "",
        "group": "GİRİŞ",
        "sig": "LOCK",
        "desc": "Kilit",
        "addr": ""
      },
      {
        "pin": 6,
        "block": "",
        "group": "GİRİŞ",
        "sig": "F/R",
        "desc": "İleri / geri (ileri 0, geri 1)",
        "addr": ""
      },
      {
        "pin": 7,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN3 / Screw type",
        "desc": "Model seçimi 3 veya vida yönü (saat yönü 0, ters 1)",
        "addr": ""
      },
      {
        "pin": 8,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN4",
        "desc": "Tork seçimi 4 (çoklu sekans)",
        "addr": ""
      },
      {
        "pin": 9,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Reset / Work-piece OUT",
        "desc": "Reset (çevrim dahil) veya parça alandan çıktı (P76 = 3)",
        "addr": ""
      },
      {
        "pin": 10,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT1",
        "desc": "Hata kodu 1",
        "addr": ""
      },
      {
        "pin": 11,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT2",
        "desc": "Hata kodu 2",
        "addr": ""
      },
      {
        "pin": 12,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT3",
        "desc": "Hata kodu 3",
        "addr": ""
      },
      {
        "pin": 13,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT4",
        "desc": "Hata kodu 4",
        "addr": ""
      },
      {
        "pin": 14,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "F/R status OUT",
        "desc": "İleri / geri durumu (ileri 0, geri 1)",
        "addr": ""
      },
      {
        "pin": 15,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Torque up",
        "desc": "Torka ulaşıldı",
        "addr": ""
      },
      {
        "pin": 16,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Motor run OUT",
        "desc": "Motor çalışıyor",
        "addr": ""
      },
      {
        "pin": 17,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "READY",
        "desc": "Hazır",
        "addr": ""
      },
      {
        "pin": 18,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "ALARM (NG)",
        "desc": "Alarm (NOK)",
        "addr": ""
      },
      {
        "pin": 19,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Work-piece IN",
        "desc": "Parça alana girdi",
        "addr": ""
      },
      {
        "pin": 20,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Cycle count complete",
        "desc": "Sayım tamamlandı",
        "addr": ""
      },
      {
        "pin": 21,
        "block": "",
        "group": "ORTAK",
        "sig": "Output COM",
        "desc": "Çıkış ortak",
        "addr": ""
      },
      {
        "pin": 22,
        "block": "",
        "group": "ORTAK",
        "sig": "Input COM",
        "desc": "Giriş ortak",
        "addr": ""
      },
      {
        "pin": 23,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN1",
        "desc": "Model seçimi 1",
        "addr": ""
      },
      {
        "pin": 24,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN2",
        "desc": "Model seçimi 2",
        "addr": ""
      },
      {
        "pin": 25,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Fastening OK OUT",
        "desc": "Sıkma OK",
        "addr": ""
      }
    ],
    "Sehan": [
      {
        "pin": 1,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN1",
        "desc": "Tork seçimi 1",
        "addr": ""
      },
      {
        "pin": 2,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN2",
        "desc": "Tork seçimi 2",
        "addr": ""
      },
      {
        "pin": 3,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN3",
        "desc": "Tork seçimi 3",
        "addr": ""
      },
      {
        "pin": 4,
        "block": "",
        "group": "GİRİŞ",
        "sig": "START",
        "desc": "Başlat",
        "addr": ""
      },
      {
        "pin": 5,
        "block": "",
        "group": "GİRİŞ",
        "sig": "LOCK",
        "desc": "Kilit",
        "addr": ""
      },
      {
        "pin": 6,
        "block": "",
        "group": "GİRİŞ",
        "sig": "F/R",
        "desc": "İleri / geri (ileri 0, geri 1)",
        "addr": ""
      },
      {
        "pin": 7,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN3 / Screw type",
        "desc": "Model seçimi 3 veya vida yönü (saat yönü 0, ters 1)",
        "addr": ""
      },
      {
        "pin": 8,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Torque select IN4",
        "desc": "Tork seçimi 4 (çoklu sekans)",
        "addr": ""
      },
      {
        "pin": 9,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Reset / Work-piece OUT",
        "desc": "Reset (çevrim dahil) veya parça alandan çıktı (P76 = 3)",
        "addr": ""
      },
      {
        "pin": 10,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT1",
        "desc": "Hata kodu 1",
        "addr": ""
      },
      {
        "pin": 11,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT2",
        "desc": "Hata kodu 2",
        "addr": ""
      },
      {
        "pin": 12,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT3",
        "desc": "Hata kodu 3",
        "addr": ""
      },
      {
        "pin": 13,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Error code OUT4",
        "desc": "Hata kodu 4",
        "addr": ""
      },
      {
        "pin": 14,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "F/R status OUT",
        "desc": "İleri / geri durumu (ileri 0, geri 1)",
        "addr": ""
      },
      {
        "pin": 15,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Torque up",
        "desc": "Torka ulaşıldı",
        "addr": ""
      },
      {
        "pin": 16,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Motor run OUT",
        "desc": "Motor çalışıyor",
        "addr": ""
      },
      {
        "pin": 17,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "READY",
        "desc": "Hazır",
        "addr": ""
      },
      {
        "pin": 18,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "ALARM (NG)",
        "desc": "Alarm (NOK)",
        "addr": ""
      },
      {
        "pin": 19,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Work-piece IN",
        "desc": "Parça alana girdi",
        "addr": ""
      },
      {
        "pin": 20,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Cycle count complete",
        "desc": "Sayım tamamlandı",
        "addr": ""
      },
      {
        "pin": 21,
        "block": "",
        "group": "ORTAK",
        "sig": "Output COM",
        "desc": "Çıkış ortak",
        "addr": ""
      },
      {
        "pin": 22,
        "block": "",
        "group": "ORTAK",
        "sig": "Input COM",
        "desc": "Giriş ortak",
        "addr": ""
      },
      {
        "pin": 23,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN1",
        "desc": "Model seçimi 1",
        "addr": ""
      },
      {
        "pin": 24,
        "block": "",
        "group": "GİRİŞ",
        "sig": "Model select IN2",
        "desc": "Model seçimi 2",
        "addr": ""
      },
      {
        "pin": 25,
        "block": "",
        "group": "ÇIKIŞ",
        "sig": "Fastening OK OUT",
        "desc": "Sıkma OK",
        "addr": ""
      }
    ],
    "Kilews": [
      {
        "pin": "1",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_1",
        "desc": "Giriş 1",
        "addr": ""
      },
      {
        "pin": "2",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_1 ortak",
        "addr": ""
      },
      {
        "pin": "3",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_2 (START)",
        "desc": "Giriş 2 — örnek: Başlat",
        "addr": ""
      },
      {
        "pin": "4",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_2 ortak",
        "addr": ""
      },
      {
        "pin": "5",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_3",
        "desc": "Giriş 3",
        "addr": ""
      },
      {
        "pin": "6",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_3 ortak",
        "addr": ""
      },
      {
        "pin": "7",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_4",
        "desc": "Giriş 4",
        "addr": ""
      },
      {
        "pin": "8",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_4 ortak",
        "addr": ""
      },
      {
        "pin": "9",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_5",
        "desc": "Giriş 5",
        "addr": ""
      },
      {
        "pin": "10",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_5 ortak",
        "addr": ""
      },
      {
        "pin": "11",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_6",
        "desc": "Giriş 6",
        "addr": ""
      },
      {
        "pin": "12",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_6 ortak",
        "addr": ""
      },
      {
        "pin": "13",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_7",
        "desc": "Giriş 7",
        "addr": ""
      },
      {
        "pin": "14",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_7 ortak",
        "addr": ""
      },
      {
        "pin": "15",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_8",
        "desc": "Giriş 8",
        "addr": ""
      },
      {
        "pin": "16",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_8 ortak",
        "addr": ""
      },
      {
        "pin": "17",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_9",
        "desc": "Giriş 9",
        "addr": ""
      },
      {
        "pin": "18",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_9 ortak",
        "addr": ""
      },
      {
        "pin": "19",
        "block": "INPUTS",
        "group": "GİRİŞ",
        "sig": "IN_10",
        "desc": "Giriş 10",
        "addr": ""
      },
      {
        "pin": "20",
        "block": "INPUTS",
        "group": "ORTAK",
        "sig": "GND",
        "desc": "IN_10 ortak",
        "addr": ""
      },
      {
        "pin": "1",
        "block": "OUTPUTS",
        "group": "BESLEME",
        "sig": "Vdc",
        "desc": "+24V çıkış",
        "addr": ""
      },
      {
        "pin": "2",
        "block": "OUTPUTS",
        "group": "BESLEME",
        "sig": "GND",
        "desc": "Besleme çıkışı GND",
        "addr": ""
      },
      {
        "pin": "3",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT1 (OK)",
        "desc": "Çıkış 1 — varsayılan: Sıkma OK",
        "addr": ""
      },
      {
        "pin": "4",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM1",
        "desc": "OUT1 ortak ucu",
        "addr": ""
      },
      {
        "pin": "5",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT2",
        "desc": "Çıkış 2",
        "addr": ""
      },
      {
        "pin": "6",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM2",
        "desc": "OUT2 ortak ucu",
        "addr": ""
      },
      {
        "pin": "7",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT3",
        "desc": "Çıkış 3",
        "addr": ""
      },
      {
        "pin": "8",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM3",
        "desc": "OUT3 ortak ucu",
        "addr": ""
      },
      {
        "pin": "9",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT4",
        "desc": "Çıkış 4",
        "addr": ""
      },
      {
        "pin": "10",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM4",
        "desc": "OUT4 ortak ucu",
        "addr": ""
      },
      {
        "pin": "11",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT5",
        "desc": "Çıkış 5",
        "addr": ""
      },
      {
        "pin": "12",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM5",
        "desc": "OUT5 ortak ucu",
        "addr": ""
      },
      {
        "pin": "13",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT6",
        "desc": "Çıkış 6",
        "addr": ""
      },
      {
        "pin": "14",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM6",
        "desc": "OUT6 ortak ucu",
        "addr": ""
      },
      {
        "pin": "15",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT7",
        "desc": "Çıkış 7",
        "addr": ""
      },
      {
        "pin": "16",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM7",
        "desc": "OUT7 ortak ucu",
        "addr": ""
      },
      {
        "pin": "17",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT8",
        "desc": "Çıkış 8",
        "addr": ""
      },
      {
        "pin": "18",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM8",
        "desc": "OUT8 ortak ucu",
        "addr": ""
      },
      {
        "pin": "19",
        "block": "OUTPUTS",
        "group": "ÇIKIŞ",
        "sig": "OUT9",
        "desc": "Çıkış 9",
        "addr": ""
      },
      {
        "pin": "20",
        "block": "OUTPUTS",
        "group": "ORTAK",
        "sig": "COM9",
        "desc": "OUT9 ortak ucu",
        "addr": ""
      }
    ]
  },
  "machines": [
    {
      "id": "m_1",
      "code": "M-01",
      "name": "Örnek İstasyon 1",
      "brand": "Desoutter",
      "gunCode": "",
      "pins": [
        {
          "pin": "GND",
          "block": "INPUT",
          "group": "BESLEME",
          "sig": "GND",
          "desc": "Giriş GND (0V)",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "+24V",
          "block": "INPUT",
          "group": "BESLEME",
          "sig": "+24V",
          "desc": "+24V besleme (STOP kontağı buradan)",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "0VE",
          "block": "INPUT",
          "group": "BESLEME",
          "sig": "0VE",
          "desc": "Harici 0V ortak — panodan gelen (-) ile köprüle",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "STOP",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "STOP",
          "desc": "Durdurma girişi (+24V – STOP arası kontak)",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "n.c.",
          "block": "INPUT",
          "group": "—",
          "sig": "n.c.",
          "desc": "Bağlantı yok",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "1",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "CYC1",
          "desc": "Program seçimi 1",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "2",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "CYC2",
          "desc": "Program seçimi 2",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "3",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "CYC4",
          "desc": "Program seçimi 4",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "4",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "VALSP",
          "desc": "Sıkma izni — sinyal gelince çalış komutu",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "5",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "ACKNOW",
          "desc": "Hata / uyarı onayı",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "6",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "SCY",
          "desc": "Çevrim başlatma",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "7",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "DIR",
          "desc": "Dönüş yönü seçimi",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "8",
          "block": "INPUT",
          "group": "GİRİŞ",
          "sig": "RESET",
          "desc": "Sıfırlama",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "GND",
          "block": "OUTPUT",
          "group": "BESLEME",
          "sig": "GND",
          "desc": "Çıkış GND (0V)",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "+24V",
          "block": "OUTPUT",
          "group": "BESLEME",
          "sig": "+24V",
          "desc": "+24V besleme",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "0VE",
          "block": "OUTPUT",
          "group": "BESLEME",
          "sig": "0VE",
          "desc": "Harici 0V ortak — giriş 0VE ile köprülü",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "COM1",
          "block": "OUTPUT",
          "group": "ORTAK",
          "sig": "COM1",
          "desc": "Çıkış 1–4 ortak ucu",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "1",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "CYC1",
          "desc": "Seçili program geri bildirimi 1",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "2",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "CYC2",
          "desc": "Seçili program geri bildirimi 2",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "3",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "CYC4",
          "desc": "Seçili program geri bildirimi 4",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "4",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "READY",
          "desc": "Sistem hazır",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "5",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "INCYC",
          "desc": "Sıkma devam ediyor",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "6",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "ACCRP",
          "desc": "Sıkma OK",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "7",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "REJRP",
          "desc": "Sıkma NOK",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "8",
          "block": "OUTPUT",
          "group": "ÇIKIŞ",
          "sig": "NCYOK",
          "desc": "Toplu çevrim OK",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        },
        {
          "pin": "COM2",
          "block": "OUTPUT",
          "group": "ORTAK",
          "sig": "COM2",
          "desc": "Çıkış 5–8 ortak ucu — +24V verilecek",
          "addr": "",
          "wireType": "single",
          "color": "Boş",
          "color2": "Beyaz",
          "wireNo": ""
        }
      ]
    }
  ],
  "brandInfo": {
    "Desoutter": {
      "connector": "KLEMENS",
      "image": "",
      "note": "Giriş ve çıkış iki ayrı klemens bloğu. 0VE uçları köprülü; COM2'ye +24V verilir.",
      "orientation": "v",
      "blocks": [
        {
          "name": "INPUT",
          "terminals": [
            "GND",
            "+24V",
            "0VE",
            "STOP",
            "n.c.",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"
          ]
        },
        {
          "name": "OUTPUT",
          "terminals": [
            "GND",
            "+24V",
            "0VE",
            "COM1",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "COM2"
          ]
        }
      ],
      "signals": [
        {
          "group": "BESLEME",
          "sig": "GND",
          "desc": "Giriş GND (0V)"
        },
        {
          "group": "BESLEME",
          "sig": "+24V",
          "desc": "+24V besleme (STOP kontağı buradan)"
        },
        {
          "group": "BESLEME",
          "sig": "0VE",
          "desc": "Harici 0V ortak — panodan gelen (-) ile köprüle"
        },
        {
          "group": "GİRİŞ",
          "sig": "STOP",
          "desc": "Durdurma girişi (+24V – STOP arası kontak)"
        },
        {
          "group": "—",
          "sig": "n.c.",
          "desc": "Bağlantı yok"
        },
        {
          "group": "GİRİŞ",
          "sig": "CYC1",
          "desc": "Program seçimi 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "CYC2",
          "desc": "Program seçimi 2"
        },
        {
          "group": "GİRİŞ",
          "sig": "CYC4",
          "desc": "Program seçimi 4"
        },
        {
          "group": "GİRİŞ",
          "sig": "VALSP",
          "desc": "Sıkma izni — sinyal gelince çalış komutu"
        },
        {
          "group": "GİRİŞ",
          "sig": "ACKNOW",
          "desc": "Hata / uyarı onayı"
        },
        {
          "group": "GİRİŞ",
          "sig": "SCY",
          "desc": "Çevrim başlatma"
        },
        {
          "group": "GİRİŞ",
          "sig": "DIR",
          "desc": "Dönüş yönü seçimi"
        },
        {
          "group": "GİRİŞ",
          "sig": "RESET",
          "desc": "Sıfırlama"
        },
        {
          "group": "BESLEME",
          "sig": "GND",
          "desc": "Çıkış GND (0V)"
        },
        {
          "group": "BESLEME",
          "sig": "+24V",
          "desc": "+24V besleme"
        },
        {
          "group": "BESLEME",
          "sig": "0VE",
          "desc": "Harici 0V ortak — giriş 0VE ile köprülü"
        },
        {
          "group": "ORTAK",
          "sig": "COM1",
          "desc": "Çıkış 1–4 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "CYC1",
          "desc": "Seçili program geri bildirimi 1"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "CYC2",
          "desc": "Seçili program geri bildirimi 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "CYC4",
          "desc": "Seçili program geri bildirimi 4"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "READY",
          "desc": "Sistem hazır"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "INCYC",
          "desc": "Sıkma devam ediyor"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "ACCRP",
          "desc": "Sıkma OK"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "REJRP",
          "desc": "Sıkma NOK"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "NCYOK",
          "desc": "Toplu çevrim OK"
        },
        {
          "group": "ORTAK",
          "sig": "COM2",
          "desc": "Çıkış 5–8 ortak ucu — +24V verilecek"
        },
        {
          "group": "",
          "sig": "—",
          "desc": "Kullanılmıyor"
        }
      ]
    },
    "FIAM": {
      "connector": "DB25",
      "image": "",
      "note": "TPU-C3, DB25",
      "orientation": "v",
      "blocks": [],
      "signals": [
        {
          "group": "OUTPUTS (A)",
          "sig": "Run",
          "desc": "Çalışıyor"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Screw OK",
          "desc": "Vida Tamam"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Ready",
          "desc": "Hazır"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Reject",
          "desc": "Red"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Screw NOK",
          "desc": "Vida Hatalı"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Prg bit0",
          "desc": "Program bitleri"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Prg bit1",
          "desc": "Program bitleri"
        },
        {
          "group": "OUTPUTS (A)",
          "sig": "Prg bit2",
          "desc": "Program bitleri"
        },
        {
          "group": "GROUND (C)",
          "sig": "Inputs Com",
          "desc": "Girişler Ortak (-)"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Tighten",
          "desc": "Sıkma"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Untighten",
          "desc": "Gevşetme"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Stop",
          "desc": "Durdurma"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Unlock",
          "desc": "Kilit Açma"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Sel. Seq",
          "desc": "Sekans Seçimi"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Prg bit0",
          "desc": "Program bitleri"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Prg bit1",
          "desc": "Program bitleri"
        },
        {
          "group": "INPUTS (B)",
          "sig": "Prg bit2",
          "desc": "Program bitleri"
        },
        {
          "group": "+24V (D)",
          "sig": "Outputs Com",
          "desc": "Çıkışlar Ortak (+24V)"
        },
        {
          "group": "",
          "sig": "—",
          "desc": "Kullanılmıyor"
        }
      ]
    },
    "Doğa": {
      "connector": "DB25",
      "image": "",
      "note": "HDC serisi 25P I/O — P64 = 1 (PLC uzaktan kontrol)",
      "orientation": "v",
      "blocks": [],
      "signals": [
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN1",
          "desc": "Tork seçimi 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN2",
          "desc": "Tork seçimi 2"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN3",
          "desc": "Tork seçimi 3"
        },
        {
          "group": "GİRİŞ",
          "sig": "START",
          "desc": "Başlat"
        },
        {
          "group": "GİRİŞ",
          "sig": "LOCK",
          "desc": "Kilit"
        },
        {
          "group": "GİRİŞ",
          "sig": "F/R",
          "desc": "İleri / geri (ileri 0, geri 1)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN3 / Screw type",
          "desc": "Model seçimi 3 veya vida yönü (saat yönü 0, ters 1)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN4",
          "desc": "Tork seçimi 4 (çoklu sekans)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Reset / Work-piece OUT",
          "desc": "Reset (çevrim dahil) veya parça alandan çıktı (P76 = 3)"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT1",
          "desc": "Hata kodu 1"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT2",
          "desc": "Hata kodu 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT3",
          "desc": "Hata kodu 3"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT4",
          "desc": "Hata kodu 4"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "F/R status OUT",
          "desc": "İleri / geri durumu (ileri 0, geri 1)"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Torque up",
          "desc": "Torka ulaşıldı"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Motor run OUT",
          "desc": "Motor çalışıyor"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "READY",
          "desc": "Hazır"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "ALARM (NG)",
          "desc": "Alarm (NOK)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Work-piece IN",
          "desc": "Parça alana girdi"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Cycle count complete",
          "desc": "Sayım tamamlandı"
        },
        {
          "group": "ORTAK",
          "sig": "Output COM",
          "desc": "Çıkış ortak"
        },
        {
          "group": "ORTAK",
          "sig": "Input COM",
          "desc": "Giriş ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN1",
          "desc": "Model seçimi 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN2",
          "desc": "Model seçimi 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Fastening OK OUT",
          "desc": "Sıkma OK"
        },
        {
          "group": "",
          "sig": "—",
          "desc": "Kullanılmıyor"
        }
      ]
    },
    "Sehan": {
      "connector": "DB25",
      "image": "",
      "note": "HDC serisi 25P I/O — P64 = 1 (PLC uzaktan kontrol)",
      "orientation": "v",
      "blocks": [],
      "signals": [
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN1",
          "desc": "Tork seçimi 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN2",
          "desc": "Tork seçimi 2"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN3",
          "desc": "Tork seçimi 3"
        },
        {
          "group": "GİRİŞ",
          "sig": "START",
          "desc": "Başlat"
        },
        {
          "group": "GİRİŞ",
          "sig": "LOCK",
          "desc": "Kilit"
        },
        {
          "group": "GİRİŞ",
          "sig": "F/R",
          "desc": "İleri / geri (ileri 0, geri 1)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN3 / Screw type",
          "desc": "Model seçimi 3 veya vida yönü (saat yönü 0, ters 1)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Torque select IN4",
          "desc": "Tork seçimi 4 (çoklu sekans)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Reset / Work-piece OUT",
          "desc": "Reset (çevrim dahil) veya parça alandan çıktı (P76 = 3)"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT1",
          "desc": "Hata kodu 1"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT2",
          "desc": "Hata kodu 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT3",
          "desc": "Hata kodu 3"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Error code OUT4",
          "desc": "Hata kodu 4"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "F/R status OUT",
          "desc": "İleri / geri durumu (ileri 0, geri 1)"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Torque up",
          "desc": "Torka ulaşıldı"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Motor run OUT",
          "desc": "Motor çalışıyor"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "READY",
          "desc": "Hazır"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "ALARM (NG)",
          "desc": "Alarm (NOK)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Work-piece IN",
          "desc": "Parça alana girdi"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Cycle count complete",
          "desc": "Sayım tamamlandı"
        },
        {
          "group": "ORTAK",
          "sig": "Output COM",
          "desc": "Çıkış ortak"
        },
        {
          "group": "ORTAK",
          "sig": "Input COM",
          "desc": "Giriş ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN1",
          "desc": "Model seçimi 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "Model select IN2",
          "desc": "Model seçimi 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Fastening OK OUT",
          "desc": "Sıkma OK"
        },
        {
          "group": "",
          "sig": "—",
          "desc": "Kullanılmıyor"
        }
      ]
    },
    "Kilews": {
      "connector": "KLEMENS",
      "image": "",
      "note": "KL-GTCS — Her giriş/çıkışın olayı cihazdaki I/O Input / I/O Output menüsünden seçilir; burada da listeden aynısını seç. OUTPUTS: 1 Vdc (+24V, varsayılan 50mA; 12V/100mA olabilir), 2 GND, OUT1–9 kontak çiftleri (3-4 … 19-20). INPUTS: IN_1–10 (1-2 … 19-20), çift numaralı pinler GND. Islak kontak kullanılırsa girişe seri 10K direnç bağlanmalı.",
      "orientation": "h",
      "blocks": [
        {
          "name": "INPUTS",
          "terminals": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
          ]
        },
        {
          "name": "OUTPUTS",
          "terminals": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
          ]
        }
      ],
      "signals": [
        {
          "group": "GİRİŞ",
          "sig": "IN_1",
          "desc": "Giriş 1"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_1 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_2 (START)",
          "desc": "Giriş 2 — örnek: Başlat"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_2 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_3",
          "desc": "Giriş 3"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_3 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_4",
          "desc": "Giriş 4"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_4 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_5",
          "desc": "Giriş 5"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_5 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_6",
          "desc": "Giriş 6"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_6 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_7",
          "desc": "Giriş 7"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_7 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_8",
          "desc": "Giriş 8"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_8 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_9",
          "desc": "Giriş 9"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_9 ortak"
        },
        {
          "group": "GİRİŞ",
          "sig": "IN_10",
          "desc": "Giriş 10"
        },
        {
          "group": "ORTAK",
          "sig": "GND",
          "desc": "IN_10 ortak"
        },
        {
          "group": "BESLEME",
          "sig": "Vdc",
          "desc": "+24V çıkış"
        },
        {
          "group": "BESLEME",
          "sig": "GND",
          "desc": "Besleme çıkışı GND"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT1 (OK)",
          "desc": "Çıkış 1 — varsayılan: Sıkma OK"
        },
        {
          "group": "ORTAK",
          "sig": "COM1",
          "desc": "OUT1 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT2",
          "desc": "Çıkış 2"
        },
        {
          "group": "ORTAK",
          "sig": "COM2",
          "desc": "OUT2 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT3",
          "desc": "Çıkış 3"
        },
        {
          "group": "ORTAK",
          "sig": "COM3",
          "desc": "OUT3 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT4",
          "desc": "Çıkış 4"
        },
        {
          "group": "ORTAK",
          "sig": "COM4",
          "desc": "OUT4 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT5",
          "desc": "Çıkış 5"
        },
        {
          "group": "ORTAK",
          "sig": "COM5",
          "desc": "OUT5 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT6",
          "desc": "Çıkış 6"
        },
        {
          "group": "ORTAK",
          "sig": "COM6",
          "desc": "OUT6 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT7",
          "desc": "Çıkış 7"
        },
        {
          "group": "ORTAK",
          "sig": "COM7",
          "desc": "OUT7 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT8",
          "desc": "Çıkış 8"
        },
        {
          "group": "ORTAK",
          "sig": "COM8",
          "desc": "OUT8 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OUT9",
          "desc": "Çıkış 9"
        },
        {
          "group": "ORTAK",
          "sig": "COM9",
          "desc": "OUT9 ortak ucu"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OK",
          "desc": "Sıkma OK"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "NG",
          "desc": "Sıkma NOK"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "NG-High",
          "desc": "Üst limit aşıldı"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "NG-Low",
          "desc": "Alt limitin altında"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OK-Sequence",
          "desc": "Sekans tamamlandı"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "OK-JOB",
          "desc": "Job tamamlandı"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Tool Running",
          "desc": "Motor çalışıyor"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Tool Trigger",
          "desc": "Tetik / başlatma sinyali"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Reverse",
          "desc": "Ters dönüş (vida sökme)"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "UserDefine1",
          "desc": "Kullanıcı tanımlı 1"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "UserDefine2",
          "desc": "Kullanıcı tanımlı 2"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "Barcode stop",
          "desc": "Barkod durdurma"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "CW rotation",
          "desc": "Saat yönünde dönüş"
        },
        {
          "group": "ÇIKIŞ",
          "sig": "CCW rotation",
          "desc": "Saat yönü tersine dönüş"
        },
        {
          "group": "GİRİŞ",
          "sig": "Start IN",
          "desc": "Başlat"
        },
        {
          "group": "GİRİŞ",
          "sig": "Reverse",
          "desc": "Ters dönüş (vida sökme)"
        },
        {
          "group": "GİRİŞ",
          "sig": "Disable",
          "desc": "Devre dışı"
        },
        {
          "group": "GİRİŞ",
          "sig": "Enable",
          "desc": "Etkin"
        },
        {
          "group": "GİRİŞ",
          "sig": "Confirm",
          "desc": "Onay"
        },
        {
          "group": "GİRİŞ",
          "sig": "Clear",
          "desc": "Sayacı sıfırla"
        },
        {
          "group": "GİRİŞ",
          "sig": "Sequence Clear",
          "desc": "Sekansı sıfırla"
        },
        {
          "group": "GİRİŞ",
          "sig": "Reboot",
          "desc": "Yeniden başlat"
        },
        {
          "group": "GİRİŞ",
          "sig": "UserDefine1",
          "desc": "Kullanıcı tanımlı 1"
        },
        {
          "group": "GİRİŞ",
          "sig": "UserDefine2",
          "desc": "Kullanıcı tanımlı 2"
        },
        {
          "group": "GİRİŞ",
          "sig": "Gate Once",
          "desc": "Tek seferlik tetik"
        },
        {
          "group": "GİRİŞ",
          "sig": "SW JOB",
          "desc": "Job değiştir"
        },
        {
          "group": "",
          "sig": "—",
          "desc": "Kullanılmıyor"
        }
      ]
    }
  },
  "colors": []
};
