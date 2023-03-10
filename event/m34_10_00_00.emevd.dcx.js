// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 34100950);
    InitializeCommonEvent(1, 9008000, 34100952);
    InitializeCommonEvent(2, 9008000, 34100250);
    InitializeCommonEvent(3, 9008000, 34100251);
    InitializeCommonEvent(4, 9008000, 34100252);
    InitializeCommonEvent(5, 9008000, 34100200);
    InitializeCommonEvent(6, 9008000, 34100201);
    InitializeCommonEvent(7, 9008000, 34100202);
    InitializeCommonEvent(8, 9008000, 34100100);
    InitializeCommonEvent(9, 9008000, 34100101);
    InitializeCommonEvent(10, 9008000, 34100102);
    InitializeCommonEvent(11, 9008000, 34100103);
    InitializeCommonEvent(12, 9008000, 34100104);
    InitializeCommonEvent(13, 9008000, 34100105);
    InitializeCommonEvent(14, 9008000, 34100106);
    InitializeCommonEvent(15, 9008000, 34100107);
    InitializeCommonEvent(16, 9008000, 34100108);
    InitializeCommonEvent(17, 9008000, 34100109);
    InitializeCommonEvent(18, 9008000, 34100110);
    InitializeCommonEvent(19, 9008000, 34100111);
    InitializeCommonEvent(20, 9008000, 34100112);
    InitializeCommonEvent(21, 9008000, 34100113);
    InitializeCommonEvent(22, 9008000, 34100114);
    InitializeCommonEvent(23, 9008000, 34100115);
    InitializeCommonEvent(24, 9008000, 34100116);
    InitializeCommonEvent(25, 9008000, 34100117);
    InitializeCommonEvent(26, 9008000, 34100118);
    InitializeCommonEvent(27, 9008000, 34100119);
    InitializeCommonEvent(28, 9008000, 34100120);
    InitializeCommonEvent(29, 9008000, 34100121);
    InitializeCommonEvent(30, 9008000, 34100122);
    InitializeCommonEvent(31, 9008000, 34100123);
    InitializeCommonEvent(32, 9008000, 34100124);
    InitializeCommonEvent(33, 9008000, 34100125);
    InitializeCommonEvent(34, 9008000, 34100126);
    InitializeCommonEvent(35, 9008000, 34100127);
    InitializeCommonEvent(36, 9008000, 34100128);
    InitializeCommonEvent(37, 9008000, 34100129);
    InitializeCommonEvent(38, 9008000, 34100130);
    InitializeCommonEvent(39, 9008000, 34100131);
    InitializeCommonEvent(40, 9008000, 34100132);
    InitializeCommonEvent(41, 9008000, 34100133);
    InitializeCommonEvent(42, 9008000, 34100134);
    InitializeCommonEvent(43, 9008000, 34100135);
    
    RegisterBonfire(34100000, 34101950, 0, 0, 0, 5);
    RegisterBonfire(34100002, 34101952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005508, 34100510, 34101510, 0, 34101510, 34101511, 34101512, 34100511);
    InitializeEvent(0, 34102510, 0);
    InitializeCommonEvent(0, 90005605, 34101600, 2594, 34102600, 0, 34102610, 34102611, 34102612, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005110, 191, 9101, 34101650, 34100500, 8148, 806934, 9080, 60522, 0);
    InitializeCommonEvent(0, 90005300, 34100300, 34100300, 34100300, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 34100200, 30020, 20020, 34102200, 1097859072, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34100201, 30020, 20020, 34102200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 34100202, 34102200, 1090519040, -1);
});

$Event(34102510, Default, function() {
    InitializeCommonEvent(0, 90005507, 34100510, 34101510, 0, 34101510, 34101511, 34102513, 34101512, 34102514, 34102511, 34102512, 34100511, 34102512, 0);
});

$Event(34102690, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, InArea(10000, 34102690));
    GotoIf(L1, InArea(10000, 34102691));
    ChangeWeather(Weather.None, -1, false);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L0:
    cond |= WeatherActive(Weather.RainyClouds, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.RainyClouds, -1, false);
    Goto(L2);
L1:
    cond |= WeatherActive(Weather.HeavyFog, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.HeavyFog, -1, false);
L2:
    RestartEvent();
});

$Event(34102800, Restart, function() {
    EndIf(EventFlag(34100800));
    WaitFor(CharacterHPValue(34100800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(34108000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34100800));
    HandleBossDefeatAndDisplayBanner(34100800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(9280, ON);
    SetEventFlagID(34100800, ON);
});

$Event(34102810, Restart, function() {
    if (EventFlag(34100800)) {
        DisableCharacter(34100800);
        DisableCharacterCollision(34100800);
        ForceCharacterDeath(34100800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(34100800);
    if (!EventFlag(34100801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 34102801))
                || HasDamageType(34100800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(34100801, ON);
    } else {
L1:
        WaitFor(EventFlag(34102805) && InArea(10000, 34102800));
    }
L2:
    EnableCharacterAI(34100800);
    SetNetworkUpdateRate(34100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34100800, 0, 0);
});

$Event(34102849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 34100800, 34101800, 34102800, 34102805, 34105800, 10000, 34100801, 34102801);
    InitializeCommonEvent(0, 9005801, 34100800, 34101800, 34102800, 34102805, 34102806, 10000);
    InitializeCommonEvent(0, 9005811, 34100800, 34101800, 3, 34100801);
    InitializeCommonEvent(0, 9005822, 34100800, 90003101, 34102805, 34102806, 0, 11002852, 0, 0);
});


