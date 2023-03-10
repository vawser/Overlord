// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041520270);
    InitializeCommonEvent(1, 9008000, 1041520101);
    InitializeCommonEvent(2, 9008000, 1041520280);
    InitializeCommonEvent(3, 9008000, 1041520100);
    InitializeCommonEvent(4, 9008000, 1041520951);
    InitializeCommonEvent(5, 9008000, 1041520102);
    InitializeCommonEvent(6, 9008000, 1041520103);
    InitializeCommonEvent(7, 9008000, 1041520104);
    InitializeCommonEvent(8, 9008000, 1041520105);
    InitializeCommonEvent(9, 9008000, 1041520106);
    InitializeCommonEvent(10, 9008000, 1041520107);
    InitializeCommonEvent(11, 9008000, 1041520108);
    InitializeCommonEvent(12, 9008000, 1041520300);
    InitializeCommonEvent(13, 9008000, 1041520109);
    InitializeCommonEvent(14, 9008000, 1041520110);
    InitializeCommonEvent(15, 9008000, 1041520111);
    InitializeCommonEvent(16, 9008000, 1041520112);
    InitializeCommonEvent(17, 9008000, 1041520113);
    InitializeCommonEvent(18, 9008000, 1041520114);
    InitializeCommonEvent(19, 9008000, 1041520115);
    InitializeCommonEvent(20, 9008000, 1041520116);
    InitializeCommonEvent(21, 9008000, 1041520117);
    InitializeCommonEvent(22, 9008000, 1041520800);
    InitializeCommonEvent(23, 9008000, 1041520118);
    InitializeCommonEvent(24, 9008000, 1041520119);
    InitializeCommonEvent(25, 9008000, 1041520120);
    InitializeCommonEvent(26, 9008000, 1041520121);
    InitializeCommonEvent(27, 9008000, 1041520122);
    InitializeCommonEvent(28, 9008000, 1041520123);
    InitializeCommonEvent(29, 9008000, 1041520124);
    InitializeCommonEvent(30, 9008000, 1041520125);
    InitializeCommonEvent(31, 9008000, 1041520126);
    InitializeCommonEvent(32, 9008000, 1041520127);
    InitializeCommonEvent(33, 9008000, 1041520128);
    InitializeCommonEvent(34, 9008000, 1041520129);
    InitializeCommonEvent(35, 9008000, 1041520130);
    InitializeCommonEvent(36, 9008000, 1041520131);
    InitializeCommonEvent(37, 9008000, 1041520132);
    InitializeCommonEvent(38, 9008000, 1041520133);
    InitializeCommonEvent(39, 9008000, 1041520134);
    InitializeCommonEvent(40, 9008000, 1041520135);
    InitializeCommonEvent(41, 9008000, 1041520136);
    InitializeCommonEvent(42, 9008000, 1041520137);
    InitializeCommonEvent(43, 9008000, 1041520138);
    InitializeCommonEvent(44, 9008000, 1041520139);
    InitializeCommonEvent(45, 9008000, 1041520140);
    InitializeCommonEvent(46, 9008000, 1041520141);
    InitializeCommonEvent(47, 9008000, 1041520142);
    InitializeCommonEvent(48, 9008000, 1041520143);
    InitializeCommonEvent(49, 9008000, 1041520144);
    InitializeCommonEvent(50, 9008000, 1041520145);
    InitializeCommonEvent(51, 9008000, 1041520146);
    InitializeCommonEvent(52, 9008000, 1041520147);
    InitializeCommonEvent(53, 9008000, 1041520148);
    InitializeCommonEvent(54, 9008000, 1041520149);
    InitializeCommonEvent(55, 9008000, 1041520150);
    InitializeCommonEvent(56, 9008000, 1041520151);
    InitializeCommonEvent(57, 9008000, 1041520152);
    InitializeCommonEvent(58, 9008000, 1041520153);
    InitializeCommonEvent(59, 9008000, 1041520154);
    InitializeCommonEvent(60, 9008000, 1041520155);
    InitializeCommonEvent(61, 9008000, 1041520156);
    InitializeCommonEvent(62, 9008000, 1041520157);
    
    RegisterBonfire(76305, 1041521951, 0, 0, 0, 5);
    InitializeEvent(0, 1041522320, 1041520800, 904510600, 28);
    InitializeCommonEvent(0, 90005860, 1041520800, 0, 1041520800, 1, 30300, 0);
    InitializeEvent(0, 1041522270, 1041520270, 1041522270, 1041522271);
    InitializeEvent(1, 1041522270, 1041520270, 1041522270, 1041522271);
    InitializeEvent(2, 1041522270, 1041520280, 1041522280, 1041522281);
    InitializeEvent(3, 1041522270, 1041520280, 1041522280, 1041522281);
    InitializeCommonEvent(0, 90005633, 580320, 580020, 1041520300, 30015, 20015, 1041521300, 1041521310);
    InitializeCommonEvent(0, 90005631, 1041521400, 61030);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1041522300, 1041520800);
});

$Event(1041522270, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X8_4, 900, 802103000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X8_4, 900, 802103010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X8_4, 900, 802103020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X8_4, 900, 802103030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X8_4, 900, 802103040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X8_4, 900, 802103050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X8_4, 900, 802103060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(X0_4, X8_4, 900, 802103070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1041522300, Restart, function(X0_4) {
    if (!EventFlag(1041520800)) {
        if (!EventFlag(1037510800)) {
            if (!EventFlag(1041522810)) {
                DisableCharacter(X0_4);
                DisableCharacterCollision(X0_4);
                WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 1041522800));
                SetEventFlagID(1041520820, ON);
                SetEventFlagID(1041522810, ON);
                EnableCharacterFadeOnEnable(X0_4);
                EnableCharacter(X0_4);
                EnableCharacterCollision(X0_4);
                ForceAnimationPlayback(X0_4, 20019, false, false, false);
            }
L1:
            EndEvent();
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1041522320, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4) && !EventFlag(9000));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(9290, ON);
    if (EventFlag(1037510810)) {
        SetSpEffect(X0_4, 4401);
    }
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9290, OFF);
    RestartEvent();
L1:
    SetEventFlagID(9291, ON);
    if (EventFlag(1037510810)) {
        SetSpEffect(X0_4, 4401);
    }
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9291, OFF);
    RestartEvent();
});


