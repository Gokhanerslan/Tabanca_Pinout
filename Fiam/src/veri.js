// Otomatik oluşturulur, elle düzenlemeyin. Asıl veri: tabanca_makine_veriler.json
window.TABANCA_VERI = {
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
      "id": "m_156dd59b0b",
      "region": "HEX LINE",
      "code": "HCB-01",
      "name": "Radiator Core Builder Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Core Builder 1 · Tip: AUTO_C_B · Envanter: 201500212",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d4f12bd0ce",
      "region": "HEX LINE",
      "code": "HCB-02",
      "name": "Radiator Core Builder Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Core Builder 2 · Tip: AUTO_C_B · Envanter: 201500213",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f7477ea969",
      "region": "HEX LINE",
      "code": "HCB-03",
      "name": "Radiator Core Builder Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Core Builder 3 · Tip: AUTO_C_B · Envanter: 201500214",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_46683bdb0c",
      "region": "HEX LINE",
      "code": "HCB-04",
      "name": "Condenser Core Builder Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Core Builder 1 · Tip: AUTO_C_B · Envanter: 201600046",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_7728c960ba",
      "region": "HEX LINE",
      "code": "HCB-05",
      "name": "Condenser Core Builder Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Core Builder 2 · Tip: AUTO_C_B · Envanter: 201600047",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d2d5bd2ace",
      "region": "HEX LINE",
      "code": "HCB-06",
      "name": "Condenser Core Builder Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Core Builder 3 · Tip: AUTO_C_B · Envanter: 201600048",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_00a823df9e",
      "region": "HEX LINE",
      "code": "HFM-01",
      "name": "Radyatör Fin Mill Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Fin Mill 1 · Tip: FIN_MILL · Envanter: 201500209",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f5ca72326f",
      "region": "HEX LINE",
      "code": "HFM-02",
      "name": "Radyatör Fin Mill Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Fin Mill 2 · Tip: FIN_MILL · Envanter: 201500210",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c1daa6fb6f",
      "region": "HEX LINE",
      "code": "HFM-03",
      "name": "Radyatör Fin Mill Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Fin Mill 3 · Tip: FIN_MILL · Envanter: 201500211",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6faff8c98c",
      "region": "HEX LINE",
      "code": "HFM-04",
      "name": "Condenser Fin Mill Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Fin Mill 1 · Tip: FIN_MILL · Envanter: 201500209",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3ab5aa3f76",
      "region": "HEX LINE",
      "code": "HFM-05",
      "name": "Condenser Fin Mill Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Fin Mill 2 · Tip: FIN_MILL · Envanter: 201500210",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_2cfaf5c7f9",
      "region": "HEX LINE",
      "code": "HFM-06",
      "name": "Condenser Fin Mill Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Condenser Fin Mill 3 · Tip: FIN_MILL · Envanter: 201500211",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f15dfd29ce",
      "region": "INJECTION",
      "code": "VH36/71EJTL-01",
      "name": "Enjeksiyon Test Masaları 1",
      "brand": "",
      "gunCode": "",
      "note": "Injection Test Table 1 · Tip: ASSY_TEST · Envanter: 202201001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6fc0583b9e",
      "region": "INJECTION",
      "code": "VH36/71HAVT-01",
      "name": "36X/71X Heater Montaj Görüntü Testi",
      "brand": "",
      "gunCode": "",
      "note": "36/71X Heater Assy. Vision Test · Tip: ASSY_TEST",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_250ec41cf1",
      "region": "HVAC LINE",
      "code": "VH36X-01",
      "name": "V36X Ön Montaj ve Test Hattı",
      "brand": "",
      "gunCode": "",
      "note": "V36X Front Assembly and Test Line · Tip: ASSY_TEST · Envanter: 201200111",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_86449e000f",
      "region": "INJECTION",
      "code": "VH36XBWVT",
      "name": "36X Blower Görüntü Testi",
      "brand": "",
      "gunCode": "",
      "note": "36X Blower Vision Tset · Tip: ASSY_TEST · Envanter: 201200115",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_467df0dfac",
      "region": "INJECTION",
      "code": "VH36XEJTL-01",
      "name": "Enjeksiyon Test Masaları 3",
      "brand": "",
      "gunCode": "",
      "note": "Injection Test Table 3 · Tip: ASSY_TEST · Envanter: 202201003",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_979f4991fa",
      "region": "LAB",
      "code": "VH3D-01",
      "name": "3D Ölçüm Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "3D Measuring Machine · Tip: TEST_EQ · Envanter: 200600359",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b8c5ea5ad8",
      "region": "FT LINE",
      "code": "VH3S-01",
      "name": "3 Darbeli Forming Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 1 · Tip: FORMING · Envanter: 201300010",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f07767af2a",
      "region": "FT LINE",
      "code": "VH3S-02",
      "name": "3 Darbeli Forming Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 2 · Tip: FORMING · Envanter: 201300011",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_01e4f5747e",
      "region": "FT LINE",
      "code": "VH3S-03",
      "name": "3 Darbeli Forming Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 3 · Tip: FORMING · Envanter: 201300053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d77ef1efb4",
      "region": "FT LINE",
      "code": "VH3S-04",
      "name": "3 Darbeli Forming Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 4 · Tip: FORMING · Envanter: 201300053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3a7031add5",
      "region": "FT LINE",
      "code": "VH3S-05",
      "name": "3 Darbeli Forming Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 5 · Tip: FORMING · Envanter: 201300053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c0a14aba94",
      "region": "FT LINE",
      "code": "VH3S-06",
      "name": "3 Darbeli Forming Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 6 · Tip: FORMING · Envanter: 201300053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_44298b7a78",
      "region": "FT LINE",
      "code": "VH3S-07",
      "name": "3 Darbeli Forming Makinesi 7",
      "brand": "",
      "gunCode": "",
      "note": "3 Strokes Forming Machine 7 · Tip: FORMING · Envanter: 201300053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_619e3c2d44",
      "region": "FT LINE",
      "code": "VH6S-01",
      "name": "6 Darbeli Forming Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "6 Strok Forming Machine 1 · Tip: FORMING · Envanter: 200800016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_00fe5c44d2",
      "region": "FT LINE",
      "code": "VH6S-02",
      "name": "6 Darbeli Forming Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "6 Strok Forming Machine 2 · Tip: FORMING · Envanter: 200800016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_689e399c0c",
      "region": "HVAC LINE",
      "code": "VH71X-01",
      "name": "V71X Montaj ve Test Hattı",
      "brand": "",
      "gunCode": "",
      "note": "V71X Assembly and Test Line · Tip: ASSY_TEST",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_34081b498f",
      "region": "WORKSHOP",
      "code": "VHABM-01",
      "name": "Alet Bileme Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Sharping Machine · Tip: TOOL · Envanter: 200600440",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6108943250",
      "region": "HVAC LINE",
      "code": "VHB460-01",
      "name": "BCAR Montaj ve Test Hattı",
      "brand": "",
      "gunCode": "",
      "note": "BCAR Assembly and Test Line · Tip: ASSY_TEST · Envanter: 202201059",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c1d8a14467",
      "region": "HVAC LINE",
      "code": "VHBA-01",
      "name": "Emiş Fanı Act Motor Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Blower Act Motor Test Machine · Tip: ASSY_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_04c9099638",
      "region": "INJECTION",
      "code": "VHBC3BWVT",
      "name": "BC3 Blower Görüntü Testi",
      "brand": "",
      "gunCode": "",
      "note": "BC3 Blower VIision Test · Tip: ASSY_TEST · Envanter: 201200116",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8fc53840ec",
      "region": "INJECTION",
      "code": "VHBC3EJTL-01",
      "name": "Enjeksiyon Test Masaları 2",
      "brand": "",
      "gunCode": "",
      "note": "Injection Test Table 2 · Tip: ASSY_TEST · Envanter: 202201002",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_db3430c41f",
      "region": "INJECTION",
      "code": "VHBC3HAVT",
      "name": "BC3 Heater Montaj Görüntü Testi",
      "brand": "",
      "gunCode": "",
      "note": "BC3 Heater Assy. Vision Test · Tip: ASSY_TEST · Envanter: 202005033",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fd0d04d6e3",
      "region": "LAB",
      "code": "VHBKM-01",
      "name": "Boru Montaj Kuvvet Ölçüm Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Pipe Connection Force Measuring Device · Tip: TEST_EQ · Envanter: 200600360",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_72bcad7359",
      "region": "FT LINE",
      "code": "VHBM-01",
      "name": "Otomatik Kaynak Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 1 · Tip: BRAZING_EQ · Envanter: 200800019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d70862fa96",
      "region": "FT LINE",
      "code": "VHBM-02",
      "name": "Otomatik Kaynak Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 2 · Tip: BRAZING_EQ · Envanter: 200800019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cfe15bce46",
      "region": "FT LINE",
      "code": "VHBM-03",
      "name": "Otomatik Kaynak Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 3 · Tip: BRAZING_EQ · Envanter: 200800019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d1fb6c6276",
      "region": "FT LINE",
      "code": "VHBM-04",
      "name": "Otomatik Kaynak Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 4 · Tip: BRAZING_EQ · Envanter: 201300115",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e5d61ff1ed",
      "region": "FT LINE",
      "code": "VHBM-05",
      "name": "Otomatik Kaynak Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 5 · Tip: BRAZING_EQ · Envanter: 201400159",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_39f7f12e61",
      "region": "FT LINE",
      "code": "VHBM-06",
      "name": "Otomatik Kaynak Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 6 · Tip: BRAZING_EQ · Envanter: 201300009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3392075bd3",
      "region": "FT LINE",
      "code": "VHBM-07",
      "name": "Otomatik Kaynak Makinesi 7",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 7 · Tip: BRAZING_EQ · Envanter: 201300009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e26f8289e8",
      "region": "FT LINE",
      "code": "VHBM-08",
      "name": "Otomatik Kaynak Makinesi 8",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 8 · Tip: BRAZING_EQ · Envanter: 201400012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_79f4bedcc2",
      "region": "FT LINE",
      "code": "VHBM-09",
      "name": "Otomatik Kaynak Makinesi 9",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 9 · Tip: BRAZING_EQ · Envanter: 201400016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_bed2671595",
      "region": "FT LINE",
      "code": "VHBM-10",
      "name": "Otomatik Kaynak Makinesi 10",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 10 · Tip: BRAZING_EQ · Envanter: 201400279",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_34995c16ec",
      "region": "FT LINE",
      "code": "VHBM-11",
      "name": "Otomatik Kaynak Makinesi 11",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 11 · Tip: BRAZING_EQ · Envanter: 201600172",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9c967eae00",
      "region": "FT LINE",
      "code": "VHBM-12",
      "name": "Otomatik Kaynak Makinesi 12",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 12 · Tip: BRAZING_EQ · Envanter: 201600174",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9eda157e1f",
      "region": "FT LINE",
      "code": "VHBM-13",
      "name": "Otomatik Kaynak Makinesi 13",
      "brand": "",
      "gunCode": "",
      "note": "Automatic Brazing Machine 13 · Tip: BRAZING_EQ · Envanter: 201804009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a6aa9f06af",
      "region": "HVAC LINE",
      "code": "VHBM-14",
      "name": "Torch Kaynak Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Torch Brazing Machine 1 · Tip: BRAZING_EQ · Envanter: 201804009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_75d361e5c7",
      "region": "HVAC LINE",
      "code": "VHBM-15",
      "name": "Torch Kaynak Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Torch Brazing Machine 2 · Tip: BRAZING_EQ · Envanter: 201804009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1c21e3960a",
      "region": "HVAC LINE",
      "code": "VHBM-16",
      "name": "Torch Kaynak Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Torch Brazing Machine 3 · Tip: BRAZING_EQ · Envanter: 201804009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ddc9342cc8",
      "region": "HVAC LINE",
      "code": "VHBM-17",
      "name": "Torch Kaynak Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Torch Brazing Machine 4 · Tip: BRAZING_EQ · Envanter: 201804009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8228ebefb5",
      "region": "FT LINE",
      "code": "VHBPM-01",
      "name": "Braket Ezme Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Bracket Press Machine 1 · Tip: PRESS · Envanter: 201702027",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_7b4c42df9e",
      "region": "LAB",
      "code": "VHBT-01",
      "name": "Hortum Patlatma Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Hose Burst Test Machine · Tip: TEST_EQ · Envanter: 200600358",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f43b1deb8d",
      "region": "FT LINE",
      "code": "VHCB-01",
      "name": "Büküm Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Bending 1 · Tip: BENDING · Envanter: 200800020",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_daec78f20f",
      "region": "FT LINE",
      "code": "VHCB-02",
      "name": "Büküm Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Bending 2 · Tip: BENDING · Envanter: 201300185",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0088c26ab2",
      "region": "FT LINE",
      "code": "VHCB-03",
      "name": "Büküm Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Bending 3 · Tip: BENDING · Envanter: 200600375",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c1d37dc4b6",
      "region": "FT LINE",
      "code": "VHCB-04",
      "name": "Büküm Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Bending 4 · Tip: BENDING · Envanter: 200600376",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_447b40a0cd",
      "region": "FT LINE",
      "code": "VHCB-05",
      "name": "Büküm Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Bending 5 · Tip: BENDING · Envanter: 201600164",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_846bdd5129",
      "region": "FT LINE",
      "code": "VHCB-06",
      "name": "Büküm Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Bending 6 · Tip: BENDING · Envanter: 202112007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_57b31d6363",
      "region": "FT LINE",
      "code": "VHCB-07",
      "name": "Büküm Makinesi 7",
      "brand": "",
      "gunCode": "",
      "note": "Bending 7 · Tip: BENDING · Envanter: 202112009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4d845cd86d",
      "region": "FT LINE",
      "code": "VHCB-08",
      "name": "Büküm Makinesi 8",
      "brand": "",
      "gunCode": "",
      "note": "Bending 8 · Tip: BENDING · Envanter: 202112009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6a0e3e4175",
      "region": "FT LINE",
      "code": "VHCB-09",
      "name": "Büküm Makinesi 9",
      "brand": "",
      "gunCode": "",
      "note": "Bending 9 · Tip: BENDING · Envanter: 201807013",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e4f5f5b02f",
      "region": "FT LINE",
      "code": "VHCB-10",
      "name": "Büküm Makinesi 10",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fa49eaccbe",
      "region": "FT LINE",
      "code": "VHCB-11",
      "name": "Büküm Makinesi 11",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b58e8c7c66",
      "region": "FT LINE",
      "code": "VHCB-12",
      "name": "Büküm Makinesi 12",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_906fa61a81",
      "region": "FT LINE",
      "code": "VHCB-13",
      "name": "Büküm Makinesi 13",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4d6e28247f",
      "region": "FT LINE",
      "code": "VHCB-14",
      "name": "Büküm Makinesi 14",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4872759d41",
      "region": "FT LINE",
      "code": "VHCB-15",
      "name": "Büküm Makinesi 15",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c8741dcba8",
      "region": "LAB",
      "code": "VHCM-01",
      "name": "Kesme Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Cutting Machine · Tip: TEST_EQ · Envanter: 200600396",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_18ed66b67e",
      "region": "HEX LINE",
      "code": "VHCMA-01",
      "name": "Cooling Modül Montaj Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Cooling Modul Assembly Machine · Tip: ASSY_LINE · Envanter: 200800017",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fd92c2ca85",
      "region": "LAB",
      "code": "VHCME-01",
      "name": "Contour Ölçüm Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Contour Mesuring Equipment · Tip: TEST_EQ · Envanter: 200600360",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f52d314e63",
      "region": "",
      "code": "VHCORE-01",
      "name": "HTR CORE HAVA KAÇAK TEST MAKİNASI (HTR CORE AIR LEAK TEST MACHINE) 1",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9ca44e22fa",
      "region": "",
      "code": "VHCORE-02",
      "name": "HTR CORE HAVA KAÇAK TEST MAKİNASI (HTR CORE AIR LEAK TEST MACHINE) 2",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_51ee29b468",
      "region": "FT LINE",
      "code": "VHCP-01",
      "name": "Hidrolik Press Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 1 · Tip: PRESS · Envanter: 201300219",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c739ba5ed1",
      "region": "FT LINE",
      "code": "VHCP-02",
      "name": "Hidrolik Press Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 2 · Tip: PRESS · Envanter: 200800018",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d08ee55706",
      "region": "FT LINE",
      "code": "VHCP-03",
      "name": "Hidrolik Press Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 3 · Tip: PRESS · Envanter: 201600294",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8d3b6b4101",
      "region": "FT LINE",
      "code": "VHCP-04",
      "name": "Hidrolik Press Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 4 · Tip: PRESS · Envanter: 201600108",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_286a265c06",
      "region": "FT LINE",
      "code": "VHCP-05",
      "name": "Hidrolik Press Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 5 · Tip: PRESS · Envanter: 202012001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f474ab0737",
      "region": "FT LINE",
      "code": "VHCP-06",
      "name": "Hidrolik Press Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 6 · Tip: PRESS · Envanter: 201600183",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e0c555bd50",
      "region": "FT LINE",
      "code": "VHCP-07",
      "name": "Hidrolik Press Makinesi 7",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 7 · Tip: PRESS · Envanter: 201500091",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e4b0949e6b",
      "region": "FT LINE",
      "code": "VHCP-08",
      "name": "Hidrolik Press Makinesi 8",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 8 · Tip: PRESS · Envanter: 201807046",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_04cf5ae647",
      "region": "FT LINE",
      "code": "VHCP-09",
      "name": "Hidrolik Press Makinesi 9",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 9 · Tip: PRESS · Envanter: 201500165",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8f56fecb7a",
      "region": "FT LINE",
      "code": "VHCP-10",
      "name": "Hidrolik Press Makinesi 10",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 10 · Tip: PRESS · Envanter: 200600383",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_381bdfe0d4",
      "region": "FT LINE",
      "code": "VHCP-11",
      "name": "Hidrolik Press Makinesi 11",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 11 · Tip: PRESS · Envanter: 200600384",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0a9d127f36",
      "region": "FT LINE",
      "code": "VHCP-12",
      "name": "Hidrolik Press Makinesi 12",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 12 · Tip: PRESS · Envanter: 200700046",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e824801db8",
      "region": "FT LINE",
      "code": "VHCP-13",
      "name": "Hidrolik Press Makinesi 13",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 13 · Tip: PRESS · Envanter: 201000110",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e0e6386214",
      "region": "FT LINE",
      "code": "VHCP-14",
      "name": "Hidrolik Press Makinesi 14",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 14 · Tip: PRESS · Envanter: 201907016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_27e2e6415b",
      "region": "FT LINE",
      "code": "VHCP-15",
      "name": "Hidrolik Press Makinesi 15",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 15 · Tip: PRESS · Envanter: 202112011",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_97a4d9a7c7",
      "region": "FT LINE",
      "code": "VHCP-16",
      "name": "Hidrolik Press Makinesi 16",
      "brand": "",
      "gunCode": "",
      "note": "Crimp Press Machine 16 · Tip: PRESS · Envanter: 202206023",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_01ca51c7b1",
      "region": "FT LINE",
      "code": "VHCP-17",
      "name": "Hidrolik Press Makinesi 17",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_53a222f3d7",
      "region": "FT LINE",
      "code": "VHCP-18",
      "name": "Hidrolik Press Makinesi 18",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6e1aa50037",
      "region": "FT LINE",
      "code": "VHCP-19",
      "name": "Hidrolik Press Makinesi 19",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_89e6dd3fc5",
      "region": "FT LINE",
      "code": "VHCP-20",
      "name": "Hidrolik Press Makinesi 20",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_51937c9f73",
      "region": "FT LINE",
      "code": "VHCP-21",
      "name": "Hidrolik Press Makinesi 21",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f1341c4f19",
      "region": "FT LINE",
      "code": "VHCP-22",
      "name": "Hidrolik Press Makinesi 22",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f0325d8668",
      "region": "FT LINE",
      "code": "VHCP-23",
      "name": "Hidrolik Press Makinesi 23",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c3f0484dd1",
      "region": "FT LINE",
      "code": "VHCP-24",
      "name": "Hidrolik Press Makinesi 24",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_22071c146a",
      "region": "FT LINE",
      "code": "VHCP-25",
      "name": "Hidrolik Press Makinesi 25",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_065c89d158",
      "region": "FT LINE",
      "code": "VHCP-26",
      "name": "Hidrolik Press Makinesi 26",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ff3350cad9",
      "region": "FT LINE",
      "code": "VHCP-27",
      "name": "Hidrolik Press Makinesi 27",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c624ef2785",
      "region": "FT LINE",
      "code": "VHCP-28",
      "name": "Hidrolik Press Makinesi 28",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6905406f67",
      "region": "FT LINE",
      "code": "VHCP-29",
      "name": "Hidrolik Press Makinesi 29",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_022bc2f92e",
      "region": "LAB",
      "code": "VHCPVM-01",
      "name": "Basınç ve Vibrasyon Test Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Combined Pressure and Vibration Tester · Tip: TEST_EQ · Envanter: 200600359",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d68a50ac89",
      "region": "INJECTION",
      "code": "VHCR-01",
      "name": "Injection Vinç Özarar 2",
      "brand": "",
      "gunCode": "",
      "note": "Injection Özarar Crane 2 · Tip: LIFT · Envanter: 202106008",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_7dd9db02ce",
      "region": "HEX LINE",
      "code": "VHCR-02",
      "name": "Hex Vinç Özarar 1",
      "brand": "",
      "gunCode": "",
      "note": "Hex Özarar Crane 1 · Tip: LIFT · Envanter: 202107007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1c30edc14d",
      "region": "",
      "code": "VHCT-01",
      "name": "Soğutma Kulesi Sistemi",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d94618d577",
      "region": "LAB",
      "code": "VHDO-01",
      "name": "Kurutma Fırını Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Dry Oven Test Machine · Tip: TEST_EQ · Envanter: 200600396",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_48be7ea732",
      "region": "INJECTION",
      "code": "VHEJM-01",
      "name": "Enjeksiyon 900 ton makine 1",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 1 · Tip: INJ · Envanter: 202201001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_44fa7e6a5f",
      "region": "INJECTION",
      "code": "VHEJM-02",
      "name": "Enjeksiyon 900 ton makine 2",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 2 · Tip: INJ · Envanter: 202201002",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_327b9cff16",
      "region": "INJECTION",
      "code": "VHEJM-03",
      "name": "Enjeksiyon 900 ton makine 3",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 3 · Tip: INJ · Envanter: 202201003",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3d76ff9320",
      "region": "INJECTION",
      "code": "VHEJM-04",
      "name": "Enjeksiyon 900 ton makine 4",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 4 · Tip: INJ · Envanter: 202201004",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4e35d392ca",
      "region": "INJECTION",
      "code": "VHEJM-05",
      "name": "Enjeksiyon 900 ton makine 5",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 5 · Tip: INJ · Envanter: 202201005",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d9860583e3",
      "region": "INJECTION",
      "code": "VHEJM-06",
      "name": "Enjeksiyon 900 ton makine 6",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 6 · Tip: INJ · Envanter: 202201006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_71ddd3d427",
      "region": "INJECTION",
      "code": "VHEJM-07",
      "name": "Enjeksiyon 900 ton makine 7",
      "brand": "",
      "gunCode": "",
      "note": "Injection 900 ton machine 7 · Tip: INJ · Envanter: 202201007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4627e95b0a",
      "region": "INJECTION",
      "code": "VHEJM-08",
      "name": "Enjeksiyon 1300 ton makine 8",
      "brand": "",
      "gunCode": "",
      "note": "Injection 1300 ton machine 8 · Tip: INJ · Envanter: 202201007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e7e2b7c350",
      "region": "INJECTION",
      "code": "VHEJM-09",
      "name": "Enjeksiyon 1300 ton makine 9",
      "brand": "",
      "gunCode": "",
      "note": "Injection 1300 ton machine 9 · Tip: INJ · Envanter: 202201007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_621ad908bc",
      "region": "INJECTION",
      "code": "VHEJM-10",
      "name": "Chiller ve ekipmanları 1",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 1 · Tip: INJ · Envanter: 202201035",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c69503029e",
      "region": "INJECTION",
      "code": "VHEJM-11",
      "name": "Chiller ve ekipmanları 2",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 2 · Tip: INJ · Envanter: 202201036",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0dd133017a",
      "region": "INJECTION",
      "code": "VHEJM-12",
      "name": "Chiller ve ekipmanları 3",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 3 · Tip: INJ · Envanter: 202201037",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1d24f9eeeb",
      "region": "INJECTION",
      "code": "VHEJM-13",
      "name": "Chiller ve ekipmanları 4",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 4 · Tip: INJ · Envanter: 202201038",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a6c0337c2d",
      "region": "INJECTION",
      "code": "VHEJM-14",
      "name": "Chiller ve ekipmanları 5",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 5 · Tip: INJ · Envanter: 202201039",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e452c724a1",
      "region": "INJECTION",
      "code": "VHEJM-15",
      "name": "Chiller ve ekipmanları 6",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 6 · Tip: INJ · Envanter: 202201040",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c43687e4a3",
      "region": "INJECTION",
      "code": "VHEJM-16",
      "name": "Chiller ve ekipmanları 7",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 7 · Tip: INJ · Envanter: 202201041",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_04970ea5c4",
      "region": "INJECTION",
      "code": "VHEJM-17",
      "name": "Chiller ve ekipmanları 8",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 8 · Tip: INJ · Envanter: 202201041",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_548bbef951",
      "region": "INJECTION",
      "code": "VHEJM-18",
      "name": "Chiller ve ekipmanları 9",
      "brand": "",
      "gunCode": "",
      "note": "Chillers and Equipments 9 · Tip: INJ · Envanter: 202201041",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f5a95734c1",
      "region": "INJECTION",
      "code": "VHEJM-19",
      "name": "Sıcaklık Kontrol Ekipmanı 1-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 1-1 · Tip: INJ · Envanter: 202201042",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_888c469ef2",
      "region": "INJECTION",
      "code": "VHEJM-20",
      "name": "Sıcaklık Kontrol Ekipmanı 1-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 1-2 · Tip: INJ · Envanter: 202201043",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_97ed1f0429",
      "region": "INJECTION",
      "code": "VHEJM-21",
      "name": "Sıcaklık Kontrol Ekipmanı 2-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 2-1 · Tip: INJ · Envanter: 202201044",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3b2a2f241a",
      "region": "INJECTION",
      "code": "VHEJM-22",
      "name": "Sıcaklık Kontrol Ekipmanı 2-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 2-2 · Tip: INJ · Envanter: 202201045",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b4f083db5e",
      "region": "INJECTION",
      "code": "VHEJM-23",
      "name": "Sıcaklık Kontrol Ekipmanı 3-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 3-1 · Tip: INJ · Envanter: 202201046",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_92532694c2",
      "region": "INJECTION",
      "code": "VHEJM-24",
      "name": "Sıcaklık Kontrol Ekipmanı 3-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 3-2 · Tip: INJ · Envanter: 202201047",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c97751f967",
      "region": "INJECTION",
      "code": "VHEJM-25",
      "name": "Sıcaklık Kontrol Ekipmanı 4-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 4-1 · Tip: INJ · Envanter: 202201048",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8df24f65e7",
      "region": "INJECTION",
      "code": "VHEJM-26",
      "name": "Sıcaklık Kontrol Ekipmanı 4-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 4-2 · Tip: INJ · Envanter: 202201049",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_426ff8e189",
      "region": "INJECTION",
      "code": "VHEJM-27",
      "name": "Sıcaklık Kontrol Ekipmanı 5-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 5-1 · Tip: INJ · Envanter: 202201050",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6a33172c07",
      "region": "INJECTION",
      "code": "VHEJM-28",
      "name": "Sıcaklık Kontrol Ekipmanı 5-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 5-2 · Tip: INJ · Envanter: 202201051",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_842d739981",
      "region": "INJECTION",
      "code": "VHEJM-29",
      "name": "Sıcaklık Kontrol Ekipmanı 6-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 6-1 · Tip: INJ · Envanter: 202201052",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_27c8b22ba2",
      "region": "INJECTION",
      "code": "VHEJM-30",
      "name": "Sıcaklık Kontrol Ekipmanı 6-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 6-2 · Tip: INJ · Envanter: 202201053",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_712483e4be",
      "region": "INJECTION",
      "code": "VHEJM-31",
      "name": "Sıcaklık Kontrol Ekipmanı 7-1",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 7-1 · Tip: INJ · Envanter: 202201054",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c0ee42feec",
      "region": "INJECTION",
      "code": "VHEJM-32",
      "name": "Sıcaklık Kontrol Ekipmanı 7-2",
      "brand": "",
      "gunCode": "",
      "note": "Temperature Controller Equipments 7-2 · Tip: INJ · Envanter: 202201055",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_36e53a9452",
      "region": "INJECTION",
      "code": "VHEJM-33",
      "name": "Soğutma Kulesi Sistemi",
      "brand": "",
      "gunCode": "",
      "note": "Cooling Tower Systems Matsui · Tip: INJ · Envanter: 202201056",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b36609bfbf",
      "region": "INJECTION",
      "code": "VHEJM-34",
      "name": "Ecoprecleaner Su Yumuşatma",
      "brand": "",
      "gunCode": "",
      "note": "Eco Precleaner Sysytems · Tip: INJ · Envanter: 202206002",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b4754185bc",
      "region": "INJECTION",
      "code": "VHEJM-35",
      "name": "Enjeksiyon Güç Pompası Sistemi",
      "brand": "",
      "gunCode": "",
      "note": "Injection Power Pump Systems · Tip: INJ · Envanter: 202206004",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fe37cedad1",
      "region": "INJECTION",
      "code": "VHEJM-36",
      "name": "Granül Otomatik Besleme Sistemi",
      "brand": "",
      "gunCode": "",
      "note": "Auto Feeding Systems · Tip: INJ · Envanter: 202201034",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_2dc77b233b",
      "region": "",
      "code": "VHEUCM-01",
      "name": "EU COOLING MODULE MAKİNASI",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9a5fa44d88",
      "region": "HVAC LINE",
      "code": "VHEUH-01",
      "name": "Eu Hvac Montaj Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Eu Hvac Assambly Machine · Tip: ASSY_LINE · Envanter: 201500059",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_deb1cdb242",
      "region": "HVAC LINE",
      "code": "VHEUH-02",
      "name": "Eu Cooling Module Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Eu Cooling Module Machine · Tip: ASSY_TEST · Envanter: 201904008",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_623d6752f5",
      "region": "HVAC LINE",
      "code": "VHEUH-03",
      "name": "Eu Roof Top Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Eu Roof Top Machine · Tip: ASSY_LINE · Envanter: 201500034",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6e9dca643d",
      "region": "HVAC LINE",
      "code": "VHEUH-04",
      "name": "Hava Kaçak Test Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Air Leak Test Machine 4 · Tip: AIR_TEST · Envanter: 200500003",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_128ebdc260",
      "region": "HEX LINE",
      "code": "VHEUH-05",
      "name": "Radyatör Tank Toc Montaj Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Rad Tank Toc Assy Machine · Tip: ASSY_LINE · Envanter: 200800017",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f73d40f29b",
      "region": "HEX LINE",
      "code": "VHEUH-06",
      "name": "Fan Motor Balans Test Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Fan Motor Balancing Test 1 · Tip: FAN_BALANC · Envanter: 202011016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cd3573121a",
      "region": "HEX LINE",
      "code": "VHEUH-07",
      "name": "Fan Motor Balans Test Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Fan Motor Balancing Test 2 · Tip: FAN_BALANC · Envanter: 202011016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a419cab372",
      "region": "HEX LINE",
      "code": "VHEUH-08",
      "name": "Fan Shroud Montaj M/C Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Fan Shroud Assy M/C Machine · Tip: FAN_BALANC · Envanter: 202011016",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4cea6ce11f",
      "region": "HVAC LINE",
      "code": "VHEUH-09",
      "name": "Hava Kaçak Test Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Air Leak Test Machine 1 · Tip: AIR_TEST · Envanter: 202106001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_24a13e0a2c",
      "region": "HVAC LINE",
      "code": "VHEUH-10",
      "name": "Hava Kaçak Test Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Air Leak Test Machine 2 · Tip: AIR_TEST · Envanter: 200500004",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_29fec4ebe8",
      "region": "HVAC LINE",
      "code": "VHEV-01",
      "name": "Hava Kaçak Test Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Air Leak Test Machine 3 · Tip: AIR_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8430bf0e52",
      "region": "",
      "code": "VHFBM-01",
      "name": "FAN MOTOR BALANS TEST MAKİNASI (FAN MOTOR BALANCING TEST MACHINE) 1",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9c82c57351",
      "region": "",
      "code": "VHFBM-02",
      "name": "FAN MOTOR BALANS TEST MAKİNASI (FAN MOTOR BALANCING TEST MACHINE) 2",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_2a0ce2449c",
      "region": "FT LINE",
      "code": "VHFL-01",
      "name": "Ön A/C Line Montaj ve Etiket Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Front A/C Line Assembly and Label Machine · Tip: ASSY_LINE",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_10c3752f78",
      "region": "FT LINE",
      "code": "VHFOM-01",
      "name": "Ferrule Forming Automation Machine 1",
      "brand": "",
      "gunCode": "",
      "note": "Ferrule Forming Automation Machine 1 · Tip: FORMING · Envanter: 201300003",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_14ca521a0f",
      "region": "FT LINE",
      "code": "VHFOM-02",
      "name": "Ferrule Forming Automation Machine 2",
      "brand": "",
      "gunCode": "",
      "note": "Ferrule Forming Automation Machine 2 · Tip: FORMING · Envanter: 201000080",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4520cebe5e",
      "region": "FT LINE",
      "code": "VHFOM-03",
      "name": "Ferrule Forming Automation Machine 3",
      "brand": "",
      "gunCode": "",
      "note": "Ferrule Forming Automation Machine 3 · Tip: FORMING · Envanter: 201708190",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d291c2c890",
      "region": "FT LINE",
      "code": "VHFOM-04",
      "name": "Ferrule Forming Automation Machine 4",
      "brand": "",
      "gunCode": "",
      "note": "Ferrule Forming Automation Machine 4 · Tip: FORMING · Envanter: 201300005",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_36bed1928c",
      "region": "FT LINE",
      "code": "VHFOM-05",
      "name": "MSF Forming Automation Machine 5",
      "brand": "",
      "gunCode": "",
      "note": "MSF Forming Automation Machine 5 · Tip: FORMING · Envanter: 202106004",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e041a286ae",
      "region": "FT LINE",
      "code": "VHFOM-06",
      "name": "DSL Forming Automation Machine 6",
      "brand": "",
      "gunCode": "",
      "note": "DSL Forming Automation Machine 6 · Tip: FORMING · Envanter: 201909009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_09a3c06c28",
      "region": "FT LINE",
      "code": "VHFOM-07",
      "name": "MSF Forming Automation Machine 7",
      "brand": "",
      "gunCode": "",
      "note": "MSF Forming Automation Machine 7 · Tip: FORMING · Envanter: 201909009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_2476000ac6",
      "region": "FT LINE",
      "code": "VHFOM-08",
      "name": "Ferrule Forming Automation Machine 8",
      "brand": "",
      "gunCode": "",
      "note": "Ferrule Forming Automation Machine 8 · Tip: FORMING · Envanter: 201909009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0bb7015f07",
      "region": "FT LINE",
      "code": "VHFOM-09",
      "name": "Ferrule Forming Automation Machine 9",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_dbcbf3b558",
      "region": "FT LINE",
      "code": "VHFOM-10",
      "name": "Ferrule Forming Automation Machine 10",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f95be1aad7",
      "region": "FT LINE",
      "code": "VHFOM-11",
      "name": "Ferrule Forming Automation Machine 11",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0b69ac0550",
      "region": "FT LINE",
      "code": "VHFOM-12",
      "name": "Ferrule Forming Automation Machine 12",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f0f7804f19",
      "region": "FT LINE",
      "code": "VHFOM-13",
      "name": "Ferrule Forming Automation Machine 13",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4879d009e6",
      "region": "HEX LINE",
      "code": "VHFX-01",
      "name": "Fırın Flux Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Furnace Flux Machine · Tip: FLUX · Envanter: 201500205",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_206029203e",
      "region": "FT LINE",
      "code": "VHGM-01",
      "name": "Freze Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Grower Machine 1 · Tip: GROOV_MACH · Envanter: 201300012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_604615ec49",
      "region": "FT LINE",
      "code": "VHGM-02",
      "name": "Freze Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Grower Machine 2 · Tip: GROOV_MACH · Envanter: 201300012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_372e2ab2ba",
      "region": "FT LINE",
      "code": "VHGM-03",
      "name": "Freze Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Grower Machine 3 · Tip: GROOV_MACH · Envanter: 201300012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cc08f572b6",
      "region": "FT LINE",
      "code": "VHGM-04",
      "name": "Freze Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Grower Machine 4 · Tip: GROOV_MACH · Envanter: 200600393",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fe2cae6b89",
      "region": "",
      "code": "VHHB-01",
      "name": "HİDROLİK BÜKME MAKİNASI (HYDRAULIC BENDER MACHINE) 1",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ae824b5440",
      "region": "",
      "code": "VHHB-02",
      "name": "HİDROLİK BÜKME MAKİNASI (HYDRAULIC BENDER MACHINE) 2",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_95b15e95f5",
      "region": "FT LINE",
      "code": "VHHC-01",
      "name": "Hortum Kesme Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Hose Cut Machine 1 · Tip: HOSE_CUT · Envanter: 200600390",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_bee650b8b2",
      "region": "FT LINE",
      "code": "VHHC-02",
      "name": "Hortum Kesme Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Hose Cut Machine 2 · Tip: HOSE_CUT · Envanter: 200600390",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0abc371b16",
      "region": "HEX LINE",
      "code": "VHHCM-01",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Hex Inspect Helium Chamber Test · Tip: HE_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b8ec7b1d31",
      "region": "HVAC LINE",
      "code": "VHHCM-02",
      "name": "Evap Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Evap Inspect Helium Chamber Test · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1775445452",
      "region": "FT LINE",
      "code": "VHHCM-03",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Ft Inspect Helium Chamber Test 1 · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5e1e44c157",
      "region": "FT LINE",
      "code": "VHHCM-04",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Ft Inspect Helium Chamber Test 2 · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0d9a05f1c0",
      "region": "FT LINE",
      "code": "VHHCM-05",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Ft Hetech Helium Chamber Test 3 · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9e92853b5b",
      "region": "FT LINE",
      "code": "VHHCM-06",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Ft Hetech Helium Chamber Test 4 · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6347478f8f",
      "region": "FT LINE",
      "code": "VHHCM-07",
      "name": "Helyum Chamber Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Ft Hetech Helium Chamber Test 5 · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e09722b211",
      "region": "FT LINE",
      "code": "VHHCM-08",
      "name": "HELYUM ÇEMBER TEST MACHINE 8",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_314ba383f9",
      "region": "FT LINE",
      "code": "VHHCM-09",
      "name": "HELYUM ÇEMBER TEST MACHINE 9",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_da4c8f1292",
      "region": "FT LINE",
      "code": "VHHCM-10",
      "name": "HELYUM ÇEMBER TEST MACHINE 10",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a6e6e7e57f",
      "region": "FT LINE",
      "code": "VHHCM-11",
      "name": "HELYUM ÇEMBER TEST MACHINE 11",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d139e6d452",
      "region": "FT LINE",
      "code": "VHHLT-01",
      "name": "Sniffer Helyum Testi Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 1 · Tip: HE_TEST · Envanter: 200800015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_343ec80100",
      "region": "FT LINE",
      "code": "VHHLT-02",
      "name": "Sniffer Helyum Testi Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 2 · Tip: HE_TEST · Envanter: 200800015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1fdf79b17d",
      "region": "FT LINE",
      "code": "VHHLT-03",
      "name": "Sniffer Helyum Testi Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 3 · Tip: HE_TEST · Envanter: 200800015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a523914432",
      "region": "FT LINE",
      "code": "VHHLT-04",
      "name": "Sniffer Helyum Testi Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 4 · Tip: HE_TEST · Envanter: 200800015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_759c5d28b8",
      "region": "FT LINE",
      "code": "VHHLT-05",
      "name": "Sniffer Helyum Testi Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 5 · Tip: HE_TEST · Envanter: 201300128",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_12077bbb9f",
      "region": "FT LINE",
      "code": "VHHLT-06",
      "name": "Sniffer Helyum Testi Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Test Machine 6 · Tip: HE_TEST · Envanter: 200600386",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5d6526cd4b",
      "region": "HVAC LINE",
      "code": "VHHLT-07",
      "name": "Evap Sniffer Helyum Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Evap Sniffer Helium Test Machine · Tip: HE_TEST · Envanter: 201909019",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_bd6761e1f9",
      "region": "FT LINE",
      "code": "VHHPM-01",
      "name": "H-Plate Takma Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "H-Plate Assembly Machine 1 · Tip: ASSY_LINE · Envanter: 201300015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c53ed10ea0",
      "region": "HVAC LINE",
      "code": "VHHRU-01",
      "name": "Evap Helyum Geri Kazanım Ünitesi",
      "brand": "",
      "gunCode": "",
      "note": "Evap Helium Recovery Unit · Tip: HE_TEST · Envanter: 200600385",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_26529c6e8a",
      "region": "FT LINE",
      "code": "VHHRU-02",
      "name": "Sniffer Helyum Geri Kazanım Ünitesi",
      "brand": "",
      "gunCode": "",
      "note": "Sniffer Helium Recovery Unit · Tip: HE_TEST · Envanter: 201805004",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_466bfffb8e",
      "region": "HEX LINE",
      "code": "VHHRU-03",
      "name": "Hex Helyum Geri Kazanım Ünitesi",
      "brand": "",
      "gunCode": "",
      "note": "Hex Helium Recovery Unit · Tip: HE_TEST · Envanter: 201809012",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b688be7f18",
      "region": "FT LINE",
      "code": "VHHRU-04",
      "name": "Hetech Helyum Geri Kazanım Ünitesi",
      "brand": "",
      "gunCode": "",
      "note": "Hetech Helium Recovery Unit · Tip: HE_TEST · Envanter: 201809012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0ca14b9ea1",
      "region": "LAB",
      "code": "VHHWT-01",
      "name": "Hortum Dayanıklılık Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Hose Whip Test Machine · Tip: TEST_EQ · Envanter: 200600359",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b3103d35bb",
      "region": "HVAC LINE",
      "code": "VHIA-01",
      "name": "AC3/BC3 Montaj ve Test Hattı",
      "brand": "",
      "gunCode": "",
      "note": "AC3/BC3 Assembly and Test Line · Tip: ASSY_TEST · Envanter: 202201059",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_436a0e2420",
      "region": "WORKSHOP",
      "code": "VHKC-01",
      "name": "Kaiser Kompresör 125 T",
      "brand": "",
      "gunCode": "",
      "note": "Kaiser Compressor CSD 125 T · Tip: AIR_COMP · Envanter: 201908013",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_25327758b4",
      "region": "WORKSHOP",
      "code": "VHKC-02",
      "name": "Kaiser Kompresör 125 T",
      "brand": "",
      "gunCode": "",
      "note": "Kaiser Compressor CSD 125 T · Tip: AIR_COMP · Envanter: 201908013",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_fcdbc89c98",
      "region": "WORKSHOP",
      "code": "VHKC-03",
      "name": "Kaiser Kompresör Ask 27 T",
      "brand": "",
      "gunCode": "",
      "note": "Kaiser Compressor Ask 27 T · Tip: AIR_COMP · Envanter: 201908013",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ba24fb7230",
      "region": "WORKSHOP",
      "code": "VHKF-01",
      "name": "Phoebus Kalıpçı Freze Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Drilling Machine · Tip: TOOL · Envanter: 200600441",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cc43af84b1",
      "region": "FT LINE",
      "code": "VHLM-01",
      "name": "Torna Makinesi DMS Makine",
      "brand": "",
      "gunCode": "",
      "note": "Lathe Machine DMS CR2555 · Tip: TOOL · Envanter: 202204004",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0bac1e5fcf",
      "region": "LAB",
      "code": "VHLT-01",
      "name": "Kaçak Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Leakage Test Machine · Tip: TEST_EQ · Envanter: 200600360",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_10e95260eb",
      "region": "FT LINE",
      "code": "VHMB-01",
      "name": "Manual Kaynak Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Manual Brazing Machine 1 · Tip: BRAZING_EQ · Envanter: 200700178",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_99c257d2bc",
      "region": "FT LINE",
      "code": "VHMB-02",
      "name": "Manual Kaynak Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Manual Brazing Machine 2 · Tip: BRAZING_EQ · Envanter: 201300225",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_672b0281d4",
      "region": "FT LINE",
      "code": "VHMB-03",
      "name": "Manual Kaynak Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Manual Brazing Machine 3 (ÇEKDEN GELECEK MAKİNA) · Tip: BRAZING_EQ · Envanter: 201300225",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5e87adc4af",
      "region": "FT LINE",
      "code": "VHMB-04",
      "name": "Manual Kaynak Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a193a3d80f",
      "region": "FT LINE",
      "code": "VHMB-05",
      "name": "Manual Kaynak Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_490261615e",
      "region": "FT LINE",
      "code": "VHMB-06",
      "name": "Manual Kaynak Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_b74f335b9a",
      "region": "FT LINE",
      "code": "VHMB-07",
      "name": "Manual Kaynak Makinesi 7",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9c06d7ff97",
      "region": "FT LINE",
      "code": "VHMC-01",
      "name": "Makaron Kesme Makinası DM-100",
      "brand": "",
      "gunCode": "",
      "note": "Macaron Cutting Machine DM-100 · Tip: CUTTING · Envanter: 201300034",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_2bb2fff14f",
      "region": "FT LINE",
      "code": "VHMC-02",
      "name": "Makaron Kesme Makinası Magnet",
      "brand": "",
      "gunCode": "",
      "note": "Macaron Cutting Machine Magnet · Tip: CUTTING · Envanter: 201500079",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d575735be2",
      "region": "LAB",
      "code": "VHME-01",
      "name": "Ölçüm Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Measuring Equipment · Tip: TEST_EQ · Envanter: 200600377",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_78474e4114",
      "region": "FT LINE",
      "code": "VHMHM-01",
      "name": "Makaron Isıtma Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Heat Shrink 1 · Tip: HEAT_SHRIN · Envanter: 201000079",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3d1b41e799",
      "region": "FT LINE",
      "code": "VHMHM-02",
      "name": "Makaron Isıtma Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Heat Shrink 2 · Tip: HEAT_SHRIN · Envanter: 201100029",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_bc194491ec",
      "region": "LAB",
      "code": "VHMIC-01",
      "name": "Mikroskop",
      "brand": "",
      "gunCode": "",
      "note": "Tool Marke`d Microscope · Tip: TEST_EQ · Envanter: 200600358",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cd7d94464d",
      "region": "FT LINE",
      "code": "VHMK-01",
      "name": "Metaloc Boyama",
      "brand": "",
      "gunCode": "",
      "note": "Metaloc Painting · Tip: METALOC · Envanter: 201300102",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c59210b536",
      "region": "WORKSHOP",
      "code": "VHMM-01",
      "name": "Matkap Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Drilling Machine · Tip: TOOL · Envanter: 200600442",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3b24696afe",
      "region": "",
      "code": "VHMTT-01",
      "name": "MODÜL MONTAJ HAVA KAÇAK TEST MAKİNASI MODULE ASS'Y TOC AIR LEAK TEST MACHINE)",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e7af7f818f",
      "region": "HEX LINE",
      "code": "VHOIL-01",
      "name": "Oil Cooler Montaj ve Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Oil Cooler Assy and Test Machine · Tip: ASSY_TEST · Envanter: 202106001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_72595fefff",
      "region": "FT LINE",
      "code": "VHORG-01",
      "name": "O-Ring Takma Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "O-Ring Assemly Machine 1 · Tip: O_RING · Envanter: 201200082",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5417967481",
      "region": "FT LINE",
      "code": "VHORG-02",
      "name": "O-Ring Takma Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "O-Ring Assemly Machine 2 · Tip: O_RING · Envanter: 201200082",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d722d4fce1",
      "region": "FT LINE",
      "code": "VHOVN-01",
      "name": "Kurutucu Fırın 1",
      "brand": "",
      "gunCode": "",
      "note": "Dry Oven 1 · Tip: DRYER · Envanter: 201200049",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0c8767e815",
      "region": "HEX LINE",
      "code": "VHOVN-02",
      "name": "Fırın Kurutma Fırını",
      "brand": "",
      "gunCode": "",
      "note": "Furnace Dry Oven · Tip: OVEN · Envanter: 201500204",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c56c8fd201",
      "region": "LAB",
      "code": "VHPC-01",
      "name": "Basınç Çevrim Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "P-Cycle Test Machine · Tip: TEST_EQ · Envanter: 200600357",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_94a87e5a06",
      "region": "FT LINE",
      "code": "VHPFM-01",
      "name": "Kağıt Kaplama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Paper Folding Machine · Tip: CRIMPING · Envanter: 201600180",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_6e05978435",
      "region": "FT LINE",
      "code": "VHPM-01",
      "name": "Delme Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Piercing Machine 1 · Tip: PIERCING · Envanter: 200600392",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_66ae32e247",
      "region": "FT LINE",
      "code": "VHPM-02",
      "name": "Delme Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Piercing Machine 2 · Tip: PIERCING · Envanter: 201702027",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_d1bc8e3fe6",
      "region": "FT LINE",
      "code": "VHPM-03",
      "name": "Delme Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Piercing Machine 3 · Tip: PIERCING · Envanter: 200600392",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f60fbe6667",
      "region": "FT LINE",
      "code": "VHPM-04",
      "name": "Delme Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Piercing Machine 4 · Tip: PIERCING · Envanter: 201300050",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a1f42ec750",
      "region": "FT LINE",
      "code": "VHPM-05",
      "name": "Delme Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Piercing Machine 5 · Tip: PIERCING · Envanter: 201702027",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9ed8a7b2a9",
      "region": "LAB",
      "code": "VHPOM-01",
      "name": "Parlatma Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Polishing Machine · Tip: TEST_EQ · Envanter: 200600396",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9a82ecd5f2",
      "region": "LAB",
      "code": "VHPS-01",
      "name": "Güç Beslemesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Power Supply ( 30A.50A,70A) · Tip: TEST_EQ · Envanter: 200600359",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_40253c3c5a",
      "region": "LAB",
      "code": "VHPS-02",
      "name": "Güç Beslemesi 2",
      "brand": "",
      "gunCode": "",
      "note": "MULTI POWER SUPPLY (70A) · Tip: TEST_EQ · Envanter: 200600358",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5afc456812",
      "region": "HEX LINE",
      "code": "VHRAT-01",
      "name": "Radyator Hava Kaçak Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Air Leak Test Machine · Tip: AIR_TEST · Envanter: 200700176",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c12fcdb9c5",
      "region": "FT LINE",
      "code": "VHRB-01",
      "name": "Büküm Otomasyon Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Bending Automation 1 · Tip: BENDING · Envanter: 202112007",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_e9d6de3bf7",
      "region": "FT LINE",
      "code": "VHRB-02",
      "name": "Büküm Otomasyon Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Bending Automation 2 · Tip: BENDING · Envanter: 202112008",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0c76988e01",
      "region": "FT LINE",
      "code": "VHRB-03",
      "name": "Büküm Otomasyon Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Bending Automation 3 · Tip: BENDING · Envanter: 202112009",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_321dfe1346",
      "region": "FT LINE",
      "code": "VHRCP-01",
      "name": "Radyatör Pres Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Crimp Press Machine 1 · Tip: PRESS · Envanter: 201300186",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8c7c9b2df6",
      "region": "FT LINE",
      "code": "VHRCP-02",
      "name": "Radyatör Pres Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Crimp Press Machine 2 · Tip: PRESS · Envanter: 201500064",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ba76cee771",
      "region": "FT LINE",
      "code": "VHRCP-03",
      "name": "Radyatör Pres Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Crimp Press Machine 3 · Tip: PRESS · Envanter: 201300187",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4a8ce5f9d2",
      "region": "FT LINE",
      "code": "VHRCP-04",
      "name": "Radyatör Pres Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Crimp Press Machine 4 · Tip: PRESS · Envanter: 201500194",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_76c5592098",
      "region": "HEX LINE",
      "code": "VHRCUT-01",
      "name": "Radyatör Kesme Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Radiator Cutting Machine · Tip: RAD_CUT · Envanter: 201500194",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_5966ea895a",
      "region": "FT LINE",
      "code": "VHRHL-01",
      "name": "Arka Helyum Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Rear Helyum Test · Tip: HE_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8f6d701b26",
      "region": "FT LINE",
      "code": "VHRHL-02",
      "name": "REAR HELYUM TEST 2",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_cb3b8bd908",
      "region": "FT LINE",
      "code": "VHRL-01",
      "name": "Arka A/C Line Montaj ve Etiket Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Rear A/C Line Assembly and Label Machine · Tip: ASSY_LINE",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_8730a1ce1c",
      "region": "",
      "code": "VHROOF-01",
      "name": "EU ROOF TOP MAKİNASI",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_1c89f54ea3",
      "region": "",
      "code": "VHRTT-01",
      "name": "RADYATÖR TANK TOC MONTAJ MAKİNASI (RAD TANK TOC ASS'Y MACHINE)",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_7576406898",
      "region": "FT LINE",
      "code": "VHRVT-01",
      "name": "Perçin Takma Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Rivet Machine 1 · Tip: RIVETING · Envanter: 201300015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_464cdb1606",
      "region": "FT LINE",
      "code": "VHRVT-02",
      "name": "Perçin Takma Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Rivet Machine 2 · Tip: RIVETING · Envanter: 201300015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_038bd59012",
      "region": "FT LINE",
      "code": "VHRVT-03",
      "name": "Perçin Takma Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Rivet Machine 3 · Tip: RIVETING · Envanter: 201300015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c2b6116e60",
      "region": "FT LINE",
      "code": "VHRVT-04",
      "name": "Perçin Takma Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Rivet Machine 4 · Tip: RIVETING · Envanter: 201300015",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_16b681915a",
      "region": "LAB",
      "code": "VHSC-01",
      "name": "Küçük Sıcaklık, Nem ve Kurutma Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Small Chamber Machine · Tip: TEST_EQ · Envanter: 200600360",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_816fe0c4ca",
      "region": "FT LINE",
      "code": "VHSDM-01",
      "name": "Bsm Kumlama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Bsm Sanding Machine · Tip: SAND_BLAST · Envanter: 201200081",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c75e7d894c",
      "region": "HEX LINE",
      "code": "VHSDM-02",
      "name": "Bsm Kumlama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Bsm Sand Blast · Tip: SAND_BLAST · Envanter: 201500249",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9d0cac115d",
      "region": "",
      "code": "VHSHR-01",
      "name": "FAN SHROUD MONTAJ M / C MAKİNASI (FAN SHROUD ASS'Y M/C MACHINE",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_60f8a45e9c",
      "region": "HVAC LINE",
      "code": "VHSIM-01",
      "name": "Simulasyon Test Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Simulation Test Machine 1 · Tip: ASSY_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_3f01a61c6a",
      "region": "HVAC LINE",
      "code": "VHSIM-02",
      "name": "Simulasyon Test Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Simulation Test Machine 2 · Tip: ASSY_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_9b519a12c8",
      "region": "HVAC LINE",
      "code": "VHSIM-03",
      "name": "Simulasyon Test Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Simulation Test Machine 3 · Tip: ASSY_TEST · Envanter: 201903006",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_54557ff0ea",
      "region": "",
      "code": "VHSPC-01",
      "name": "SPC MAKİNASI (SPC MACHINE)",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_61f9cda731",
      "region": "LAB",
      "code": "VHSS-01",
      "name": "Tuz Buharı Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "SALT SPRAY TEST MACHINE · Tip: TEST_EQ · Envanter: 200600360",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_efd7a847d6",
      "region": "WORKSHOP",
      "code": "VHST-01",
      "name": "Proth Satıh Taşlama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Grinding Machine · Tip: TOOL · Envanter: 200600440",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_c8a544fc83",
      "region": "FT LINE",
      "code": "VHTC-01",
      "name": "Boru Kesme Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Tube Cut Machine 1 · Tip: TUBE_CUT · Envanter: 200600378",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_22a9ab788b",
      "region": "FT LINE",
      "code": "VHTC-02",
      "name": "Boru Kesme Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Tube Cut Machine 2 · Tip: TUBE_CUT · Envanter: 201902025",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_62491a2fc5",
      "region": "LAB",
      "code": "VHTCAL-01",
      "name": "Tork Kalibrasyon Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Torque Calibrator · Tip: TEST_EQ · Envanter: 200600359",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f25ae19edf",
      "region": "LAB",
      "code": "VHTCT-01",
      "name": "Termal Döngü Test Cihazı",
      "brand": "",
      "gunCode": "",
      "note": "Termal Cycle Test · Tip: TEST_EQ · Envanter: 202206001",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_dbbba849cb",
      "region": "LAB",
      "code": "VHTH-01",
      "name": "Sıcaklık ve Nem Test Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Temparature and Humidity Test Machine · Tip: TEST_EQ · Envanter: 200600396",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_41e8f572af",
      "region": "WORKSHOP",
      "code": "VHTM-01",
      "name": "Torna Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Lathe Machine · Tip: TOOL · Envanter: 200600443",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a450de577c",
      "region": "HEX LINE",
      "code": "VHTMM-01",
      "name": "Tube Mill Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Tube Mill Machine · Tip: TUBE_MILL · Envanter: 202108005",
      "critical": true,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ab5e92fe17",
      "region": "FT LINE",
      "code": "VHUC-01",
      "name": "Cleanex Ultrasonic Yıkama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Cleanex N-8001 Ultrasonic Cleaning · Tip: WASHER · Envanter: 201600012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_78e44482a5",
      "region": "",
      "code": "VHV34XV227-01",
      "name": "V34X/V227 LINE (SPARE LINE)",
      "brand": "",
      "gunCode": "",
      "note": "Kod tablosundan (SAP listesinde yok)",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_77362b6632",
      "region": "FT LINE",
      "code": "VHVAS-01",
      "name": "Valf Takma Makinesi 1",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 1 · Tip: ASSY_LINE · Envanter: 201200080",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0a5ab066b6",
      "region": "FT LINE",
      "code": "VHVAS-02",
      "name": "Valf Takma Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 2 · Tip: ASSY_LINE · Envanter: 201707160",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_4da19ffad5",
      "region": "FT LINE",
      "code": "VHVAS-03",
      "name": "Valf Takma Makinesi 3",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 3 · Tip: ASSY_LINE · Envanter: 201708172",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_db3c9db1ac",
      "region": "FT LINE",
      "code": "VHVAS-04",
      "name": "Valf Takma Makinesi 4",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 4 · Tip: ASSY_LINE · Envanter: 201708171",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ea3f1b5f3d",
      "region": "FT LINE",
      "code": "VHVAS-05",
      "name": "Valf Takma Makinesi 5",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 5 · Tip: ASSY_LINE · Envanter: 201708173",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_a5c52f0788",
      "region": "FT LINE",
      "code": "VHVAS-06",
      "name": "Valf Takma Makinesi 6",
      "brand": "",
      "gunCode": "",
      "note": "Valve Assembly Machine 6 · Tip: ASSY_LINE · Envanter: 201708173",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_344dc288ff",
      "region": "WORKSHOP",
      "code": "VHWM-01",
      "name": "Kaynak Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Welding Machine · Tip: TOOL · Envanter: 200700012",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_f4d1cc3411",
      "region": "HEX LINE",
      "code": "VHWM-02",
      "name": "Fırın Yıkama Makinesi",
      "brand": "",
      "gunCode": "",
      "note": "Furnace Degreasing Machine · Tip: PRE_FLUX · Envanter: 201500208",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_ce670135b1",
      "region": "FT LINE",
      "code": "VHWM-03",
      "name": "Yıkama Makinesi 2",
      "brand": "",
      "gunCode": "",
      "note": "Degreasing Machine 2 · Tip: WASHER · Envanter: 202112013",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
    },
    {
      "id": "m_0130b89f47",
      "region": "FT LINE",
      "code": "VHÇA-01",
      "name": "Çapak Alma Makinası",
      "brand": "",
      "gunCode": "",
      "note": "Deburring Machine · Tip: DEBURRING · Envanter: 201300078",
      "critical": false,
      "shellColor": "#2563EB",
      "image": "",
      "pins": []
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
      ],
      "bridges": [
        {
          "a": "INPUT|0VE",
          "b": "OUTPUT|0VE",
          "color": "Mavi"
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
      ],
      "bridges": []
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
      ],
      "bridges": []
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
      ],
      "bridges": []
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
      ],
      "bridges": []
    }
  },
  "colors": []
};
