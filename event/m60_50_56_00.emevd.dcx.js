// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1050560700);
    InitializeCommonEvent(1, 9008000, 1050560100);
    InitializeCommonEvent(2, 9008000, 1050560101);
    InitializeCommonEvent(3, 9008000, 1050560102);
    InitializeCommonEvent(4, 9008000, 1050560103);
    InitializeCommonEvent(5, 9008000, 1050560104);
    InitializeCommonEvent(6, 9008000, 1050560105);
    InitializeCommonEvent(7, 9008000, 1050560106);
    InitializeCommonEvent(8, 9008000, 1050560107);
    InitializeCommonEvent(9, 9008000, 1050560108);
    InitializeCommonEvent(10, 9008000, 1050560109);
    InitializeCommonEvent(11, 9008000, 1050560110);
    InitializeCommonEvent(12, 9008000, 1050560111);
    InitializeCommonEvent(13, 9008000, 1050560112);
    InitializeCommonEvent(14, 9008000, 1050560113);
    InitializeCommonEvent(15, 9008000, 1050560114);
    InitializeCommonEvent(16, 9008000, 1050560115);
    InitializeCommonEvent(17, 9008000, 1050560116);
    InitializeCommonEvent(18, 9008000, 1050560117);
    InitializeCommonEvent(19, 9008000, 1050560250);
    InitializeCommonEvent(20, 9008000, 1050560251);
    InitializeCommonEvent(21, 9008000, 1050560300);
    InitializeCommonEvent(22, 9008000, 1050560118);
    InitializeCommonEvent(23, 9008000, 1050560119);
    InitializeCommonEvent(24, 9008000, 1050560120);
    InitializeCommonEvent(25, 9008000, 1050560121);
    InitializeCommonEvent(26, 9008000, 1050560122);
    InitializeCommonEvent(27, 9008000, 1050560123);
    InitializeCommonEvent(28, 9008000, 1050560124);
    InitializeCommonEvent(29, 9008000, 1050560125);
    InitializeCommonEvent(30, 9008000, 1050560126);
    InitializeCommonEvent(31, 9008000, 1050560127);
    InitializeCommonEvent(32, 9008000, 1050560128);
    InitializeCommonEvent(33, 9008000, 1050560129);
    InitializeCommonEvent(34, 9008000, 1050560130);
    InitializeCommonEvent(35, 9008000, 1050560131);
    InitializeCommonEvent(36, 9008000, 1050560132);
    InitializeCommonEvent(37, 9008000, 1050560133);
    InitializeCommonEvent(38, 9008000, 1050560134);
    InitializeCommonEvent(39, 9008000, 1050560135);
    InitializeCommonEvent(40, 9008000, 1050560200);
    InitializeCommonEvent(41, 9008000, 1050560201);
    InitializeCommonEvent(42, 9008000, 1050560202);
    InitializeCommonEvent(43, 9008000, 1050560203);
    InitializeCommonEvent(44, 9008000, 1050560136);
    InitializeCommonEvent(45, 9008000, 1050560137);
    InitializeCommonEvent(46, 9008000, 1050560138);
    InitializeCommonEvent(47, 9008000, 1050560550);
    InitializeCommonEvent(48, 9008000, 1050560800);
    InitializeCommonEvent(49, 9008000, 1050560139);
    InitializeCommonEvent(50, 9008000, 1050560140);
    InitializeCommonEvent(51, 9008000, 1050560141);
    InitializeCommonEvent(52, 9008000, 1050560142);
    
    InitializeCommonEvent(0, 90005870, 1050560800, 904911600, 5);
    InitializeCommonEvent(0, 90005861, 1050560800, 0, 1050560800, 1, 30550, 30065, 0);
    InitializeEvent(0, 1050562200, 1050565200, 1050562200);
    InitializeEvent(0, 1050562580, 0);
    InitializeCommonEvent(0, 90005620, 1050560570, 1050561570, 1050561571, 1050561572, 1050562570, 1050562571, 1050562572);
    InitializeCommonEvent(0, 90005621, 1050560570, 1050561573);
    InitializeCommonEvent(0, 90005605, 1050561510, 3682876, 1050562510, 0, 1050562511, 1050562512, 1050562513, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005633, 580330, 580030, 1050560550, 30016, 20016, 1050561550, 1050561551);
    InitializeEvent(0, 1050562555, 1050560550);
    InitializeEvent(0, 1050562250, 1050560250, 1050566250, 1050560250, 1050560251, 35000, 17170, 17171);
    InitializeEvent(0, 1050562260, 1050561250);
    InitializeEvent(1, 1050562260, 1050561251);
    InitializeEvent(2, 1050562260, 1050561252);
    InitializeCommonEvent(0, 90005300, 1050560300, 1050560300, 0, 0, 0);
    InitializeCommonEvent(0, 90005560, 1050560500, 1050561500, 0);
    InitializeCommonEvent(0, 90005795, 7604, 0, 1050569000, 1050562141, 1050562142, 80604, 9000, 1050561700, 30010);
    if (CeremonyActive(20)) {
        InitializeCommonEvent(0, 90005796, 7604, 1050560700, 5, 1050562141);
        InitializeEvent(0, 1050562145, 0);
    }
    InitializeEvent(0, 1050562400, 0);
    InitializeEvent(0, 1050563700, 0);
    InitializeCommonEvent(0, 90005774, 7604, 1050560700, 1050567700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1050560700, true);
});

$Event(1050562145, Restart, function() {
    EndIf(!CeremonyActive(20));
    SetCharacterBackreadState(1050560700, false);
    SetCharacterTeamType(1050560700, TeamType.Human);
    DisableCharacter(1050570320);
    DisableCharacterCollision(1050570320);
    DeleteAssetfollowingSFX(1050566700, true);
    CreateAssetfollowingSFX(1050566700, 200, 806700);
});

$Event(1050562200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1050562200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5650);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1050562200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(1050562555, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
});

$Event(1050562580, Restart, function() {
    RegisterLadder(1050560580, 1050560581, 1050561580);
});

$Event(1050562250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    GotoIf(L0, EventFlag(X0_4));
    EnableGenerator(1050563250);
    EnableGenerator(1050563251);
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X4_4, 200, 1500);
    if (PlayerIsInOwnWorld()) {
        WaitFor(
            (CharacterHasSpEffect(X8_4, X20_4)
                && CharacterHasSpEffect(X8_4, X24_4)
                && HPRatio(X8_4) <= 0)
                || (CharacterHasSpEffect(X12_4, X20_4)
                    && CharacterHasSpEffect(X12_4, X24_4)
                    && HPRatio(X12_4) <= 0)
                || (CharacterHasSpEffect(X16_4, X20_4)
                    && CharacterHasSpEffect(X16_4, X24_4)
                    && HPRatio(X16_4) <= 0));
        SetNetworkconnectedEventFlagID(X0_4, ON);
        DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
L0:
        DisableGenerator(1050563250);
        DisableGenerator(1050563251);
        DisableAsset(X4_4);
        DeleteAssetfollowingSFX(X4_4, true);
        PlaySE(X4_4, SoundType.SFX, 1500);
        EndEvent();
    }
L1:
    WaitFor(EventFlag(X0_4));
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    DisableGenerator(1050563250);
    DisableGenerator(1050563251);
    DisableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 1500);
    EndEvent();
});

$Event(1050562260, Restart, function(X0_4) {
    DisableNetworkSync();
    EndIf(EventFlag(1050560250));
    WaitFor(ActionButtonInArea(9320, X0_4) || EventFlag(1050560250));
    EndIf(EventFlag(1050560250));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1050562400, Restart, function() {
    DisableNetworkSync();
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1050562140);
    SetSpEffect(1050560100, 9531);
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, 1050562140);
    SetSpEffect(1050560100, 9532);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1050563700, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(400075));
    SetEventFlagID(1050569000, ON);
    EndEvent();
});


