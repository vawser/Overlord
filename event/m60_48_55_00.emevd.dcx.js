// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048550100);
    InitializeCommonEvent(1, 9008000, 1048550101);
    InitializeCommonEvent(2, 9008000, 1048550102);
    InitializeCommonEvent(3, 9008000, 1048550103);
    InitializeCommonEvent(4, 9008000, 1048550104);
    InitializeCommonEvent(5, 9008000, 1048550105);
    InitializeCommonEvent(6, 9008000, 1048550106);
    InitializeCommonEvent(7, 9008000, 1048550107);
    InitializeCommonEvent(8, 9008000, 1048550108);
    InitializeCommonEvent(9, 9008000, 1048550109);
    InitializeCommonEvent(10, 9008000, 1048550110);
    InitializeCommonEvent(11, 9008000, 1048550111);
    InitializeCommonEvent(12, 9008000, 1048550112);
    InitializeCommonEvent(13, 9008000, 1048550113);
    InitializeCommonEvent(14, 9008000, 1048550114);
    InitializeCommonEvent(15, 9008000, 1048550115);
    InitializeCommonEvent(16, 9008000, 1048550116);
    InitializeCommonEvent(17, 9008000, 1048550117);
    InitializeCommonEvent(18, 9008000, 1048550118);
    InitializeCommonEvent(19, 9008000, 1048550119);
    InitializeCommonEvent(20, 9008000, 1048550120);
    InitializeCommonEvent(21, 9008000, 1048550121);
    InitializeCommonEvent(22, 9008000, 1048550122);
    InitializeCommonEvent(23, 9008000, 1048550123);
    InitializeCommonEvent(24, 9008000, 1048550124);
    InitializeCommonEvent(25, 9008000, 1048550125);
    InitializeCommonEvent(26, 9008000, 1048550320);
    InitializeCommonEvent(27, 9008000, 1048550321);
    InitializeCommonEvent(28, 9008000, 1048550324);
    InitializeCommonEvent(29, 9008000, 1048550325);
    InitializeCommonEvent(30, 9008000, 1048550326);
    InitializeCommonEvent(31, 9008000, 1048550126);
    InitializeCommonEvent(32, 9008000, 1048550127);
    InitializeCommonEvent(33, 9008000, 1048550128);
    InitializeCommonEvent(34, 9008000, 1048550129);
    InitializeCommonEvent(35, 9008000, 1048550130);
    InitializeCommonEvent(36, 9008000, 1048550131);
    InitializeCommonEvent(37, 9008000, 1048550132);
    InitializeCommonEvent(38, 9008000, 1048550133);
    InitializeCommonEvent(39, 9008000, 1048550134);
    InitializeCommonEvent(40, 9008000, 1048550135);
    InitializeCommonEvent(41, 9008000, 1048550136);
    InitializeCommonEvent(42, 9008000, 1048550137);
    InitializeCommonEvent(43, 9008000, 1048550138);
    
    InitializeCommonEvent(0, 90005300, 1048550200, 1048550200, 40522, 0, 0);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005421, 1248550300, 1248551301, 1248558301);
    InitializeCommonEvent(0, 90005422, 1248558301, 1248551300, 1248553301);
    InitializeCommonEvent(0, 90005424, 1248551300, 1248550302, 1248550303, 1248550300, 1248551301);
    InitializeCommonEvent(0, 90005423, 1248550302);
    InitializeCommonEvent(0, 90005423, 1248550303);
    InitializeCommonEvent(0, 90005476, 1248550800, 1248550810);
    InitializeCommonEvent(0, 90005476, 1248550801, 1248550811);
    InitializeEvent(0, 1248552820, 1248550800, 0);
    InitializeEvent(1, 1248552820, 1248550801, 0);
    InitializeEvent(0, 1248552830, 1248550800, 1248550810);
    InitializeEvent(1, 1248552830, 1248550801, 1248550811);
    InitializeEvent(0, 1248552840, 1248550800, 1248550810, 1248552800);
    InitializeEvent(1, 1248552840, 1248550801, 1248550811, 1248552801);
    InitializeCommonEvent(0, 90005871, 1248550800, 903150608, 10, 1248550810);
    InitializeCommonEvent(0, 90005871, 1248550801, 903150609, 10, 1248550811);
    InitializeCommonEvent(0, 1248552800, 1248550800, 0, 1248550800, 0, 1048550700, 1248550801, 1048550710);
    InitializeEvent(0, 1248552321, 1248550800, 1248550801, 10, 1248552815);
    InitializeEvent(0, 1248552320, 1248550800, 1248550801);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1248550300, 1248551300, 1248551301, 1248550301, 1248550302, 1248550303, 0);
});

$Event(1248552320, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1248550800));
    WaitFor(
        (CharacterDead(X0_4) || CharacterDead(X4_4))
            || (HPRatio(X0_4) <= 0.5 && HPRatio(X4_4) <= 0.5));
    SetNetworkconnectedEventFlagID(1248552815, ON);
});

$Event(1248552321, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X12_4) && FieldBattleBGMActive(X8_4));
    SetFieldBattleBGMHeatUp(X8_4, true);
    WaitFor((CharacterDead(X0_4) && CharacterDead(X4_4)) || !FieldBattleBGMActive(X8_4));
    SetFieldBattleBGMHeatUp(X8_4, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

$Event(1248552800, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (Signed(X16_4) != 0) {
        Unknown200476(X0_4, X16_4);
    }
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacter(X20_4);
        DisableCharacterCollision(X8_4);
        DisableCharacterCollision(X20_4);
        ForceCharacterDeath(X8_4, false);
        ForceCharacterDeath(X20_4, false);
        DisableCharacter(1248550810);
        DisableCharacterCollision(1248550810);
        ForceCharacterDeath(1248550810, false);
        DisableCharacter(1248550811);
        DisableCharacterCollision(1248550811);
        ForceCharacterDeath(1248550811, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X24_4);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X8_4) <= 0 && CharacterHPValue(X20_4) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(X8_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(X8_4) && CharacterDead(X20_4));
    GotoIf(S0, X12_4 == 3);
    if (X12_4 != 2) {
        if (X12_4 != 1) {
            HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.LegendFelled);
L1:
    SetEventFlagID(X0_4, ON);
    if (X4_4 != 0) {
        SetEventFlagID(X4_4, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(X16_4) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(X24_4);
    AwardItemsIncludingClients(X16_4);
    EndEvent();
});

$Event(1248552820, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(TimeOfDayInRange(19, 59, 59, 5, 59, 59));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(TimeOfDayInRange(5, 59, 59, 19, 59, 59));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
    WaitFixedTimeSeconds(X4_4);
});

$Event(1248552830, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(X0_4));
    if (!CharacterHasSpEffect(X0_4, 11830)) {
        sp &= CharacterHasSpEffect(X0_4, 11830);
        WaitFor(sp);
        DisableCharacterCollision(X0_4);
        DisableCharacterCollision(X4_4);
        EnableCharacterInvincibility(X0_4);
        EnableCharacterInvincibility(X4_4);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    DisableCharacterCollision(X0_4);
    DisableCharacterCollision(X4_4);
    EnableCharacterInvincibility(X0_4);
    EnableCharacterInvincibility(X4_4);
    sp &= CharacterHasSpEffect(X0_4, 11831);
    WaitFor(sp);
    EnableCharacterCollision(X0_4);
    EnableCharacterCollision(X4_4);
    DisableCharacterInvincibility(X0_4);
    DisableCharacterInvincibility(X4_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1248552840, Restart, function(X0_4, X4_4, X8_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(X0_4));
    DisableCharacterAI(X0_4);
    DisableCharacterAI(X4_4);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    EnableCharacterAI(X0_4);
    EnableCharacterAI(X4_4);
});


