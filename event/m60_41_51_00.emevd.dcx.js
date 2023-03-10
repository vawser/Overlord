// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041510101);
    InitializeCommonEvent(1, 9008000, 1041510270);
    InitializeCommonEvent(2, 9008000, 1041510100);
    InitializeCommonEvent(3, 9008000, 1041510102);
    InitializeCommonEvent(4, 9008000, 1041510104);
    InitializeCommonEvent(5, 9008000, 1041510450);
    InitializeCommonEvent(6, 9008000, 1041510451);
    InitializeCommonEvent(7, 9008000, 1041510452);
    InitializeCommonEvent(8, 9008000, 1041510453);
    InitializeCommonEvent(9, 9008000, 1041510800);
    InitializeCommonEvent(10, 9008000, 1041510801);
    InitializeCommonEvent(11, 9008000, 1041510103);
    InitializeCommonEvent(12, 9008000, 1041510105);
    InitializeCommonEvent(13, 9008000, 1041510106);
    InitializeCommonEvent(14, 9008000, 1041510107);
    InitializeCommonEvent(15, 9008000, 1041510108);
    InitializeCommonEvent(16, 9008000, 1041510109);
    InitializeCommonEvent(17, 9008000, 1041510110);
    InitializeCommonEvent(18, 9008000, 1041510111);
    InitializeCommonEvent(19, 9008000, 1041510200);
    InitializeCommonEvent(20, 9008000, 1041510201);
    InitializeCommonEvent(21, 9008000, 1041510202);
    InitializeCommonEvent(22, 9008000, 1041510112);
    InitializeCommonEvent(23, 9008000, 1041510113);
    InitializeCommonEvent(24, 9008000, 1041510410);
    InitializeCommonEvent(25, 9008000, 1041510400);
    InitializeCommonEvent(26, 9008000, 1041510114);
    InitializeCommonEvent(27, 9008000, 1041510115);
    InitializeCommonEvent(28, 9008000, 1041510116);
    InitializeCommonEvent(29, 9008000, 1041510117);
    InitializeCommonEvent(30, 9008000, 1041510118);
    InitializeCommonEvent(31, 9008000, 1041510119);
    InitializeCommonEvent(32, 9008000, 1041510120);
    InitializeCommonEvent(33, 9008000, 1041510121);
    
    InitializeCommonEvent(0, 90005870, 1041510800, 903251600, 12);
    InitializeCommonEvent(0, 90005870, 1041510801, 903251600, 12);
    InitializeEvent(0, 1041512800, 1041510800, 0, 1041510800, 0, 30335, 1041510801);
    InitializeCommonEvent(0, 90005261, 1041510800, 1041512500, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1041510801, 1041512500, 1092616192, 0, 0);
    InitializeEvent(0, 1041512310, 1041510800, 1041510801);
    InitializeEvent(0, 1041512321, 1041510800, 1041510801, 12, 1041512815);
    InitializeEvent(0, 1041512320, 1041510800, 1041510801);
    InitializeCommonEvent(0, 90005261, 1041510202, 1041512202, 1092616192, 0, 0);
    InitializeEvent(0, 1041512200, 1041510200);
    InitializeEvent(1, 1041512200, 1041510201);
    InitializeCommonEvent(0, 90005300, 1041510410, 1041510410, 0, 0, 0);
    InitializeEvent(0, 1041512270, 0);
    InitializeEvent(1, 1041512270, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 1041510410, 1041512410, 0, 700);
    InitializeCommonEvent(0, 90005201, 1041510452, 30016, 20016, 1120403456, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1041510450, 30017, 20017, 1041512450, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1041510451, 30017, 20017, 1041512450, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041510453, 30016, 20016, 1041512453, 0, 0, 0, 0, 0);
});

$Event(1041512200, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetSpEffect(X0_4, 8092);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(1041512270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1041510270);
    WaitFor(InArea(10000, 1041512270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1041510270, 1041512271, 900, 802103000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1041510270, 1041512271, 900, 802103010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1041510270, 1041512271, 900, 802103020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1041510270, 1041512271, 900, 802103030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1041510270, 1041512271, 900, 802103040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1041510270, 1041512271, 900, 802103050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1041510270, 1041512271, 900, 802103060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1041510270, 1041512271, 900, 802103070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1041512310, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1041510800));
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat) || CharacterAIState(X4_4, AIStateType.Combat));
    WaitFixedTimeSeconds(30);
    EnableCharacterAI(X0_4);
    EnableCharacterAI(X4_4);
    SetCharacterEventTarget(X0_4, X4_4);
    SetCharacterEventTarget(X4_4, X0_4);
    RestartEvent();
});

$Event(1041512320, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1041510800));
    WaitFor(
        (CharacterDead(X0_4) || CharacterDead(X4_4))
            || (HPRatio(X0_4) <= 0.5 && HPRatio(X4_4) <= 0.5));
    SetNetworkconnectedEventFlagID(1041512815, ON);
});

$Event(1041512321, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    WaitFor(EventFlag(X12_4) && FieldBattleBGMActive(X8_4));
    SetFieldBattleBGMHeatUp(X8_4, true);
    WaitFor((CharacterDead(X0_4) && CharacterDead(X4_4)) || !FieldBattleBGMActive(X8_4));
    SetFieldBattleBGMHeatUp(X8_4, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

$Event(1041512800, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
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
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    EnableCharacter(X8_4);
    EnableCharacter(X20_4);
    EnableCharacterCollision(X8_4);
    EnableCharacterCollision(X20_4);
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
    AwardItemsIncludingClients(X16_4);
    EndEvent();
});


