// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1052410270);
    InitializeCommonEvent(1, 9008000, 1052410950);
    InitializeCommonEvent(2, 9008000, 1052410100);
    InitializeCommonEvent(3, 9008000, 1052410850);
    InitializeCommonEvent(4, 9008000, 1052410851);
    InitializeCommonEvent(5, 9008000, 1052410210);
    InitializeCommonEvent(6, 9008000, 1052410399);
    InitializeCommonEvent(7, 9008000, 1052410800);
    InitializeCommonEvent(8, 9008000, 1052410101);
    InitializeCommonEvent(9, 9008000, 1052410102);
    InitializeCommonEvent(10, 9008000, 1052410103);
    InitializeCommonEvent(11, 9008000, 1052410104);
    InitializeCommonEvent(12, 9008000, 1052410105);
    InitializeCommonEvent(13, 9008000, 1052410106);
    InitializeCommonEvent(14, 9008000, 1052410107);
    InitializeCommonEvent(15, 9008000, 1052410108);
    InitializeCommonEvent(16, 9008000, 1052410109);
    InitializeCommonEvent(17, 9008000, 1052410110);
    InitializeCommonEvent(18, 9008000, 1052410111);
    InitializeCommonEvent(19, 9008000, 1052410112);
    InitializeCommonEvent(20, 9008000, 1052410113);
    InitializeCommonEvent(21, 9008000, 1052410114);
    InitializeCommonEvent(22, 9008000, 1052410115);
    InitializeCommonEvent(23, 9008000, 1052410116);
    InitializeCommonEvent(24, 9008000, 1052410117);
    InitializeCommonEvent(25, 9008000, 1052410118);
    InitializeCommonEvent(26, 9008000, 1052410119);
    InitializeCommonEvent(27, 9008000, 1052410120);
    InitializeCommonEvent(28, 9008000, 1052410121);
    InitializeCommonEvent(29, 9008000, 1052410122);
    InitializeCommonEvent(30, 9008000, 1052410123);
    InitializeCommonEvent(31, 9008000, 1052410124);
    
    RegisterBonfire(1052410000, 1052411950, 0, 0, 0, 5);
    InitializeEvent(0, 1052412220, 0);
    InitializeEvent(0, 1052412270, 0);
    InitializeEvent(1, 1052412270, 0);
    InitializeEvent(0, 1052412200, 1052410210, 1052411210, 1052412210);
    InitializeCommonEvent(0, 90005300, 1052410850, 1052410851, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1052410850, 1052410851);
    InitializeEvent(0, 1052412291, 1052410850, 1052410851);
    InitializeCommonEvent(0, 90005871, 1052410850, 903150606, 10, 1052410851);
    InitializeCommonEvent(0, 90005860, 1052410850, 0, 1052410850, 0, 1052410100, 0);
    InitializeCommonEvent(0, 90005872, 1052410850, 10, 0);
    InitializeEvent(0, 1052412510, 0);
    InitializeCommonEvent(0, 90005501, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052411512, 1052410512);
    InitializeCommonEvent(0, 90005870, 1052410800, 904500601, 25);
    InitializeCommonEvent(0, 90005860, 1052410800, 0, 1052410800, 1, 30420, 0);
    InitializeEvent(0, 1052412230, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1052410519, 0);
});

$Event(1052412200, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacter(X0_4);
    EndIf(EventFlag(X8_4));
    EndIf(CharacterDead(X0_4));
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        InArea(10000, X8_4)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    CreateAssetfollowingSFX(X4_4, 100, 620383);
    EnableCharacter(X0_4);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(X4_4, true);
    ForceAnimationPlayback(X0_4, 20001, false, false, false);
    WaitFixedTimeSeconds(1.9);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableCharacter(X0_4);
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1052412220, Restart, function() {
    CreateAssetfollowingSFX(1052411200, 200, 1500);
});

$Event(1052412230, Restart, function() {
    SetCharacterEnableDistanceAndUnknown200484(1052410800, 220, 40);
});

$Event(1052412291, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052412510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052413511, 1052411512, 1052413512, 1052412511, 1052412512, 1052410512, 1052410513, 0);
});

$Event(1052410519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1052410510, OFF);
});

$Event(1052412270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1052410270);
    WaitFor(EntityInRadiusOfEntity(10000, 1052410270, 60, 1));
    WaitRandomTimeSeconds(1, 8);
    if (GameCycle() == 0) {
        ShootBullet(1052410270, 1052412271, 900, 802104200, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1052410270, 1052412271, 900, 802104210, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1052410270, 1052412271, 900, 802104220, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1052410270, 1052412271, 900, 802104230, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1052410270, 1052412271, 900, 802104240, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1052410270, 1052412271, 900, 802104250, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1052410270, 1052412271, 900, 802104260, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1052410270, 1052412271, 900, 802104270, 0, 0, 0);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


