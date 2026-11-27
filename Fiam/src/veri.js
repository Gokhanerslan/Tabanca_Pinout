// Otomatik oluşturulur, elle düzenlemeyin. Asıl veri: tabanca_makine_veriler.json
window.TABANCA_VERI = {
  "activeBrand": "Desoutter",
  "selectedMachineId": "m_1",
  "templates": {
    "Desoutter": [
      { "pin": 1, "group": "INPUT", "sig": "GND", "desc": "Giriş GND", "addr": "" },
      { "pin": 2, "group": "INPUT", "sig": "+24V", "desc": "Giriş +24V", "addr": "" },
      { "pin": 3, "group": "INPUT", "sig": "0VE", "desc": "Harici Besleme 0V Ortak", "addr": "" },
      { "pin": 4, "group": "INPUT", "sig": "STOP", "desc": "Durdurma Girişi", "addr": "" },
      { "pin": 6, "group": "INPUT IN1", "sig": "CYC1", "desc": "Çevrim / Program Seçimi 1", "addr": "" },
      { "pin": 7, "group": "INPUT IN2", "sig": "CYC2", "desc": "Çevrim / Program Seçimi 2", "addr": "" },
      { "pin": 8, "group": "INPUT IN3", "sig": "CYC4", "desc": "Çevrim / Program Seçimi 4", "addr": "" },
      { "pin": 9, "group": "INPUT IN4", "sig": "VALSP", "desc": "Sıkma Onay / Start İzni", "addr": "" },
      { "pin": 10, "group": "INPUT IN5", "sig": "ACKNOW", "desc": "Hata / Uyarı Onayı", "addr": "" },
      { "pin": 11, "group": "INPUT IN6", "sig": "SCY", "desc": "Çevrim Başlatma", "addr": "" },
      { "pin": 12, "group": "INPUT IN7", "sig": "DIR", "desc": "Dönüş Yönü Seçimi", "addr": "" },
      { "pin": 13, "group": "INPUT IN8", "sig": "RESET", "desc": "Sıfırlama Girişi", "addr": "" },
      { "pin": 17, "group": "OUTPUT", "sig": "COM1", "desc": "Çıkış Ortak Ucu 1", "addr": "" },
      { "pin": 21, "group": "OUTPUT OUT4", "sig": "READY", "desc": "Sistem Hazır", "addr": "" },
      { "pin": 22, "group": "OUTPUT OUT5", "sig": "INCYC", "desc": "Sıkma Devam Ediyor", "addr": "" },
      { "pin": 23, "group": "OUTPUT OUT6", "sig": "ACCRP", "desc": "Sıkma Kabul / OK", "addr": "" },
      { "pin": 24, "group": "OUTPUT OUT7", "sig": "REJRP", "desc": "Sıkma Red / NOK", "addr": "" },
      { "pin": 25, "group": "OUTPUT OUT8", "sig": "NCYOK / COM2", "desc": "Toplu Çevrim OK / Çıkış Ortak 2", "addr": "" }
    ],
    "FIAM": [
      { "pin": 1, "group": "OUTPUTS", "sig": "Run", "desc": "Çalışıyor", "addr": "" },
      { "pin": 2, "group": "OUTPUTS", "sig": "Screw OK", "desc": "Vida Tamam", "addr": "" },
      { "pin": 3, "group": "OUTPUTS", "sig": "Ready", "desc": "Hazır", "addr": "" },
      { "pin": 4, "group": "OUTPUTS", "sig": "Reject", "desc": "Red", "addr": "" },
      { "pin": 5, "group": "OUTPUTS", "sig": "Screw NOK", "desc": "Vida Hatalı", "addr": "" },
      { "pin": 9, "group": "GROUND", "sig": "Inputs Com", "desc": "Girişler Ortak", "addr": "" },
      { "pin": 14, "group": "INPUTS", "sig": "Tighten", "desc": "Sıkma", "addr": "" },
      { "pin": 15, "group": "INPUTS", "sig": "Untighten", "desc": "Gevşetme", "addr": "" },
      { "pin": 16, "group": "INPUTS", "sig": "Stop", "desc": "Durdurma", "addr": "" },
      { "pin": 17, "group": "INPUTS", "sig": "Unlock", "desc": "Kilit Açma", "addr": "" },
      { "pin": 22, "group": "+24V", "sig": "Outputs Com", "desc": "Çıkışlar Ortak (+24V)", "addr": "" }
    ],
    "Doğa": [
      { "pin": 1, "group": "INPUT", "sig": "Torque select IN1", "desc": "Tork Seçimi IN1", "addr": "" },
      { "pin": 2, "group": "INPUT", "sig": "Torque select IN2", "desc": "Tork Seçimi IN2", "addr": "" },
      { "pin": 4, "group": "INPUT", "sig": "START", "desc": "Başlatma", "addr": "" },
      { "pin": 5, "group": "INPUT", "sig": "LOCK", "desc": "Kilitleme", "addr": "" },
      { "pin": 6, "group": "INPUT", "sig": "F/R", "desc": "İleri / Geri Yön", "addr": "" },
      { "pin": 9, "group": "INPUT", "sig": "Reset", "desc": "Sıfırlama", "addr": "" },
      { "pin": 17, "group": "OUTPUT", "sig": "READY", "desc": "Hazır Çıkışı", "addr": "" },
      { "pin": 18, "group": "OUTPUT", "sig": "ALARM (NG)", "desc": "Alarm / Hata Çıkışı", "addr": "" },
      { "pin": 21, "group": "COMMON", "sig": "Output COM", "desc": "Çıkış Ortak Ucu", "addr": "" },
      { "pin": 22, "group": "COMMON", "sig": "Input COM", "desc": "Giriş Ortak Ucu", "addr": "" },
      { "pin": 25, "group": "OUTPUT", "sig": "Fastening OK OUT", "desc": "Sıkma Başarılı Çıkışı", "addr": "" }
    ],
    "Sehan": [
      { "pin": 1, "group": "INPUT", "sig": "Torque select IN1", "desc": "Tork Seçimi IN1", "addr": "" },
      { "pin": 2, "group": "INPUT", "sig": "Torque select IN2", "desc": "Tork Seçimi IN2", "addr": "" },
      { "pin": 4, "group": "INPUT", "sig": "START", "desc": "Başlatma", "addr": "" },
      { "pin": 5, "group": "INPUT", "sig": "LOCK", "desc": "Kilitleme", "addr": "" },
      { "pin": 6, "group": "INPUT", "sig": "F/R", "desc": "İleri / Geri Yön", "addr": "" },
      { "pin": 9, "group": "INPUT", "sig": "Reset", "desc": "Sıfırlama", "addr": "" },
      { "pin": 17, "group": "OUTPUT", "sig": "READY", "desc": "Hazır Çıkışı", "addr": "" },
      { "pin": 18, "group": "OUTPUT", "sig": "ALARM (NG)", "desc": "Alarm / Hata Çıkışı", "addr": "" },
      { "pin": 21, "group": "COMMON", "sig": "Output COM", "desc": "Çıkış Ortak Ucu", "addr": "" },
      { "pin": 22, "group": "COMMON", "sig": "Input COM", "desc": "Giriş Ortak Ucu", "addr": "" },
      { "pin": 25, "group": "OUTPUT", "sig": "Fastening OK OUT", "desc": "Sıkma Başarılı Çıkışı", "addr": "" }
    ],
    "Kilews": [
      { "pin": 1, "group": "OUTPUT", "sig": "Vdc (+24V / +12V)", "desc": "Kontrolör Voltaj Çıkışı", "addr": "" },
      { "pin": 2, "group": "OUTPUT", "sig": "GND", "desc": "Güç Çıkışı GND", "addr": "" },
      { "pin": 3, "group": "OUTPUT", "sig": "OK / Output Ch1", "desc": "Programlanabilir Çıkış 1", "addr": "" },
      { "pin": 4, "group": "OUTPUT", "sig": "COM", "desc": "Çıkış Ortak Ucu", "addr": "" },
      { "pin": 5, "group": "OUTPUT", "sig": "NG", "desc": "Hatalı Çıkışı", "addr": "" },
      { "pin": 7, "group": "OUTPUT", "sig": "Tool Running", "desc": "Motor Çalışıyor", "addr": "" },
      { "pin": 9, "group": "INPUT", "sig": "START IN", "desc": "Başlatma Girişi", "addr": "" },
      { "pin": 10, "group": "INPUT", "sig": "GND", "desc": "Giriş Referans GND", "addr": "" },
      { "pin": 11, "group": "INPUT", "sig": "Reverse / Disable", "desc": "Gevşetme / Devre Dışı", "addr": "" },
      { "pin": 12, "group": "INPUT", "sig": "Confirm / Clear", "desc": "Onay / Sıfırla", "addr": "" }
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
        { "pin": 1, "group": "INPUT", "sig": "GND", "desc": "Giriş GND", "addr": "" },
        { "pin": 2, "group": "INPUT", "sig": "+24V", "desc": "Giriş +24V", "addr": "" },
        { "pin": 3, "group": "INPUT", "sig": "0VE", "desc": "Harici Besleme 0V Ortak", "addr": "" },
        { "pin": 4, "group": "INPUT", "sig": "STOP", "desc": "Durdurma Girişi", "addr": "" },
        { "pin": 6, "group": "INPUT IN1", "sig": "CYC1", "desc": "Çevrim / Program Seçimi 1", "addr": "" },
        { "pin": 7, "group": "INPUT IN2", "sig": "CYC2", "desc": "Çevrim / Program Seçimi 2", "addr": "" },
        { "pin": 8, "group": "INPUT IN3", "sig": "CYC4", "desc": "Çevrim / Program Seçimi 4", "addr": "" },
        { "pin": 9, "group": "INPUT IN4", "sig": "VALSP", "desc": "Sıkma Onay / Start İzni", "addr": "" },
        { "pin": 10, "group": "INPUT IN5", "sig": "ACKNOW", "desc": "Hata / Uyarı Onayı", "addr": "" },
        { "pin": 11, "group": "INPUT IN6", "sig": "SCY", "desc": "Çevrim Başlatma", "addr": "" },
        { "pin": 12, "group": "INPUT IN7", "sig": "DIR", "desc": "Dönüş Yönü Seçimi", "addr": "" },
        { "pin": 13, "group": "INPUT IN8", "sig": "RESET", "desc": "Sıfırlama Girişi", "addr": "" },
        { "pin": 17, "group": "OUTPUT", "sig": "COM1", "desc": "Çıkış Ortak Ucu 1", "addr": "" },
        { "pin": 21, "group": "OUTPUT OUT4", "sig": "READY", "desc": "Sistem Hazır", "addr": "" },
        { "pin": 22, "group": "OUTPUT OUT5", "sig": "INCYC", "desc": "Sıkma Devam Ediyor", "addr": "" },
        { "pin": 23, "group": "OUTPUT OUT6", "sig": "ACCRP", "desc": "Sıkma Kabul / OK", "addr": "" },
        { "pin": 24, "group": "OUTPUT OUT7", "sig": "REJRP", "desc": "Sıkma Red / NOK", "addr": "" },
        { "pin": 25, "group": "OUTPUT OUT8", "sig": "NCYOK / COM2", "desc": "Toplu Çevrim OK / Çıkış Ortak 2", "addr": "" }
      ]
    }
  ]
};
