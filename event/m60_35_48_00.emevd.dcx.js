// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1035480100);
    InitializeCommonEvent(1, 9008000, 1035480270);
    InitializeCommonEvent(2, 9008000, 1035480280);
    InitializeCommonEvent(3, 9008000, 1035480250);
    InitializeCommonEvent(4, 9008000, 1035480200);
    InitializeCommonEvent(5, 9008000, 1035480101);
    InitializeCommonEvent(6, 9008000, 1035480102);
    InitializeCommonEvent(7, 9008000, 1035480103);
    InitializeCommonEvent(8, 9008000, 1035480104);
    InitializeCommonEvent(9, 9008000, 1035480105);
    InitializeCommonEvent(10, 9008000, 1035480106);
    InitializeCommonEvent(11, 9008000, 1035480107);
    InitializeCommonEvent(12, 9008000, 1035480108);
    InitializeCommonEvent(13, 9008000, 1035480109);
    InitializeCommonEvent(14, 9008000, 1035480110);
    InitializeCommonEvent(15, 9008000, 1035480111);
    InitializeCommonEvent(16, 9008000, 1035480112);
    InitializeCommonEvent(17, 9008000, 1035480113);
    InitializeCommonEvent(18, 9008000, 1035480114);
    InitializeCommonEvent(19, 9008000, 1035480115);
    InitializeCommonEvent(20, 9008000, 1035480116);
    InitializeCommonEvent(21, 9008000, 1035480117);
    InitializeCommonEvent(22, 9008000, 1035480118);
    InitializeCommonEvent(23, 9008000, 1035480119);
    InitializeCommonEvent(24, 9008000, 1035480260);
    InitializeCommonEvent(25, 9008000, 1035480261);
    InitializeCommonEvent(26, 9008000, 1035480262);
    InitializeCommonEvent(27, 9008000, 1035480210);
    InitializeCommonEvent(28, 9008000, 1035480120);
    InitializeCommonEvent(29, 9008000, 1035480121);
    InitializeCommonEvent(30, 9008000, 1035480122);
    InitializeCommonEvent(31, 9008000, 1035480123);
    InitializeCommonEvent(32, 9008000, 1035480124);
    InitializeCommonEvent(33, 9008000, 1035480125);
    InitializeCommonEvent(34, 9008000, 1035480126);
    InitializeCommonEvent(35, 9008000, 1035480127);
    InitializeCommonEvent(36, 9008000, 1035480128);
    InitializeCommonEvent(37, 9008000, 1035480129);
    InitializeCommonEvent(38, 9008000, 1035480130);
    InitializeCommonEvent(39, 9008000, 1035480131);
    InitializeCommonEvent(40, 9008000, 1035480132);
    InitializeCommonEvent(41, 9008000, 1035480133);
    InitializeCommonEvent(42, 9008000, 1035480134);
    InitializeCommonEvent(43, 9008000, 1035480135);
    InitializeCommonEvent(44, 9008000, 1035480136);
    InitializeCommonEvent(45, 9008000, 1035480137);
    InitializeCommonEvent(46, 9008000, 1035480138);
    InitializeCommonEvent(47, 9008000, 1035480139);
    InitializeCommonEvent(48, 9008000, 1035480140);
    
    InitializeEvent(0, 1035482210, 1035480220);
    InitializeEvent(1, 1035482210, 1035480230);
    InitializeEvent(0, 1035482270, 0);
    InitializeEvent(1, 1035482270, 0);
    InitializeEvent(0, 1035482280, 0);
    InitializeEvent(1, 1035482280, 0);
    InitializeEvent(0, 1035482260, 1035480250, 1035481250, 1035480250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1035482261, 1035480250, 1035481250, 1035480250, 1035485260, 0, 0, 0, 0, 0, 1035480100, 1035482250);
    InitializeEvent(0, 1035482262, 1035480250, 0, 1035480250, 0, 1035480260, 30010, 20010, 1101004800, 0, 0, 1035482250);
    InitializeEvent(1, 1035482262, 1035480250, 0, 1035480250, 0, 1035480261, 30010, 20010, 1101004800, 0, 0, 1035482250);
    InitializeEvent(3, 1035482262, 1035480250, 0, 1035480250, 0, 1035480262, 30010, 20010, 1101004800, 0, 0, 1035482250);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005201, 1035480200, 30001, 20001, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035480200, 1097859072, 0, -1);
    InitializeCommonEvent(0, 90005251, 1035480210, 1065353216, 0, -1);
});

$Event(1035482210, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

$Event(1035482260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasDamageType(X8_4, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    IssueShortWarpRequest(X8_4, TargetEntityType.Asset, X4_4, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1035482261, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X40_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
            DisableCharacter(X12_4);
            DisableCharacterCollision(X12_4);
            ForceCharacterDeath(X12_4, false);
            EndEvent();
        }
L1:
        DisableAsset(X4_4);
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X8_4, 436)
        || CharacterHasStateInfo(X8_4, 2)
        || CharacterHasStateInfo(X8_4, 5)
        || CharacterHasStateInfo(X8_4, 6)
        || CharacterHasStateInfo(X8_4, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(X4_4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(X36_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
});

$Event(1035482262, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    EndIf(SpecialStandbyEndedFlag(X16_4));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || HasDamageType(X16_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X16_4, 436)
        || CharacterHasStateInfo(X16_4, 2)
        || CharacterHasStateInfo(X16_4, 5)
        || CharacterHasStateInfo(X16_4, 6)
        || CharacterHasStateInfo(X16_4, 260)
        || EntityInRadiusOfEntity(X16_4, 20000, X28_4, 1);
    WaitFor(
        (CharacterHasSpEffect(X0_4, 481)
            && !CharacterHasSpEffect(X0_4, 90100)
            && !CharacterHasSpEffect(X0_4, 90110)
            && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (dmgChrArea && chrSp));
    SetNetworkconnectedEventFlagID(X40_4, ON);
    SetSpecialStandbyEndedFlag(X16_4, ON);
    WaitFixedTimeSeconds(X32_4);
    ForceAnimationPlayback(X16_4, X24_4, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1035482270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1035480270);
    WaitFor(InArea(10000, 1035482270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1035480270, 1035482271, 900, 802102000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1035480270, 1035482271, 900, 802102010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1035480270, 1035482271, 900, 802102020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1035480270, 1035482271, 900, 802102030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1035480270, 1035482271, 900, 802102040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1035480270, 1035482271, 900, 802102050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1035480270, 1035482271, 900, 802102060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1035480270, 1035482271, 900, 802102070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035482280, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1035480280);
    WaitFor(InArea(10000, 1035482280));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1035480280, 1035482281, 900, 802102000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1035480280, 1035482281, 900, 802102010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1035480280, 1035482281, 900, 802102020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1035480280, 1035482281, 900, 802102030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1035480280, 1035482281, 900, 802102040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1035480280, 1035482281, 900, 802102050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1035480280, 1035482281, 900, 802102060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1035480280, 1035482281, 900, 802102070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


