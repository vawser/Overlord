// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048400950);
    InitializeCommonEvent(1, 9008000, 1048400951);
    InitializeCommonEvent(2, 9008000, 1048400100);
    InitializeCommonEvent(3, 9008000, 1048400101);
    InitializeCommonEvent(4, 9008000, 1048400102);
    InitializeCommonEvent(5, 9008000, 1048400103);
    InitializeCommonEvent(6, 9008000, 1048400104);
    InitializeCommonEvent(7, 9008000, 1048400105);
    InitializeCommonEvent(8, 9008000, 1048400106);
    InitializeCommonEvent(9, 9008000, 1048400107);
    InitializeCommonEvent(10, 9008000, 1048400108);
    InitializeCommonEvent(11, 9008000, 1048400109);
    InitializeCommonEvent(12, 9008000, 1048400110);
    InitializeCommonEvent(13, 9008000, 1048400111);
    InitializeCommonEvent(14, 9008000, 1048400800);
    InitializeCommonEvent(15, 9008000, 1048400801);
    InitializeCommonEvent(16, 9008000, 1048400112);
    InitializeCommonEvent(17, 9008000, 1048400113);
    InitializeCommonEvent(18, 9008000, 1048400114);
    InitializeCommonEvent(19, 9008000, 1048400115);
    InitializeCommonEvent(20, 9008000, 1048400116);
    InitializeCommonEvent(21, 9008000, 1048400117);
    InitializeCommonEvent(22, 9008000, 1048400118);
    InitializeCommonEvent(23, 9008000, 1048400119);
    InitializeCommonEvent(24, 9008000, 1048400120);
    InitializeCommonEvent(25, 9008000, 1048400121);
    InitializeCommonEvent(26, 9008000, 1048400122);
    InitializeCommonEvent(27, 9008000, 1048400123);
    InitializeCommonEvent(28, 9008000, 1048400124);
    InitializeCommonEvent(29, 9008000, 1048400125);
    InitializeCommonEvent(30, 9008000, 1048400126);
    InitializeCommonEvent(31, 9008000, 1048400127);
    InitializeCommonEvent(32, 9008000, 1048400128);
    InitializeCommonEvent(33, 9008000, 1048400129);
    InitializeCommonEvent(34, 9008000, 1048400130);
    InitializeCommonEvent(35, 9008000, 1048400131);
    InitializeCommonEvent(36, 9008000, 1048400132);
    InitializeCommonEvent(37, 9008000, 1048400133);
    InitializeCommonEvent(38, 9008000, 1048400134);
    InitializeCommonEvent(39, 9008000, 1048400135);
    InitializeCommonEvent(40, 9008000, 1048400136);
    InitializeCommonEvent(41, 9008000, 1048400137);
    InitializeCommonEvent(42, 9008000, 1048400138);
    InitializeCommonEvent(43, 9008000, 1048400139);
    InitializeCommonEvent(44, 9008000, 1048400140);
    InitializeCommonEvent(45, 9008000, 1048400141);
    InitializeCommonEvent(46, 9008000, 1048400142);
    InitializeCommonEvent(47, 9008000, 1048400143);
    InitializeCommonEvent(48, 9008000, 1048400144);
    InitializeCommonEvent(49, 9008000, 1048400145);
    InitializeCommonEvent(50, 9008000, 1048400146);
    InitializeCommonEvent(51, 9008000, 1048400147);
    InitializeCommonEvent(52, 9008000, 1048400148);
    InitializeCommonEvent(53, 9008000, 1048400149);
    InitializeCommonEvent(54, 9008000, 1048400150);
    InitializeCommonEvent(55, 9008000, 1048400151);
    InitializeCommonEvent(56, 9008000, 1048400152);
    InitializeCommonEvent(57, 9008000, 1048400153);
    InitializeCommonEvent(58, 9008000, 1048400154);
    InitializeCommonEvent(59, 9008000, 1048400155);
    InitializeCommonEvent(60, 9008000, 1048400156);
    
    RegisterBonfire(1048400000, 1048401950, 0, 0, 0, 5);
    RegisterBonfire(1048400001, 1048401951, 0, 0, 0, 5);
    InitializeEvent(0, 1048402800, 0);
    InitializeEvent(0, 1048402810, 0);
    InitializeEvent(0, 1048402849, 0);
    InitializeCommonEvent(0, 90005706, 1048400700, 30018, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048400700, true);
});

$Event(1048402800, Restart, function() {
    EndIf(EventFlag(1048400800));
    WaitFor(CharacterHPValue(1048400800) <= 0 && CharacterHPValue(1048400801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1048400800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1048400800) && CharacterDead(1048400801));
    HandleBossDefeatAndDisplayBanner(1048400800, TextBannerType.EnemyFelled);
    SetEventFlagID(1048400800, ON);
    EnableObjAct(1048401550, -1);
});

$Event(1048402810, Restart, function() {
    if (EventFlag(1048400800)) {
        DisableCharacter(1048400800);
        DisableCharacterCollision(1048400800);
        ForceCharacterDeath(1048400800, false);
        DisableCharacter(1048400801);
        DisableCharacterCollision(1048400801);
        ForceCharacterDeath(1048400801, false);
        EnableObjAct(1048401550, -1);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(1048400800, 30005, true, false, false);
    DisableCharacterAI(1048400801);
    DisableCharacterAI(1048400800);
    DisableObjAct(1048401550, -1);
    WaitFor(EventFlag(1048402805) && InArea(10000, 1048402800));
    EnableCharacterAI(1048400801);
    SetNetworkUpdateRate(1048400801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1048400801, 0, 904340542);
    ForceAnimationPlayback(1048400801, 3012, true, false, false);
    SetNetworkUpdateRate(1048400800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1048400800, 1, 904340541);
    WaitFixedTimeSeconds(2.2);
    EnableCharacterAI(1048400800);
    ForceAnimationPlayback(1048400800, 20005, true, false, false);
});

$Event(1048402849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1048400800, 1048401800, 1048402800, 1048402805, 1048405800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1048400800, 1048401800, 1048402800, 1048402805, 1048402806, 10000);
    InitializeCommonEvent(0, 9005811, 1048400800, 1048401800, 3, 0);
    InitializeCommonEvent(0, 9005811, 1048400800, 1048401801, 3, 0);
    InitializeCommonEvent(0, 9005822, 1048400800, 920900, 1048402805, 1048402806, 0, 1048402802, 0, 0);
});


