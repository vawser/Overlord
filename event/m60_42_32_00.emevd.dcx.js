// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1042320101);
    InitializeCommonEvent(1, 9008000, 1042320103);
    InitializeCommonEvent(2, 9008000, 1042320104);
    InitializeCommonEvent(3, 9008000, 1042320102);
    InitializeCommonEvent(4, 9008000, 1042320105);
    InitializeCommonEvent(5, 9008000, 1042320106);
    InitializeCommonEvent(6, 9008000, 1042320107);
    InitializeCommonEvent(7, 9008000, 1042320108);
    InitializeCommonEvent(8, 9008000, 1042320109);
    InitializeCommonEvent(9, 9008000, 1042320220);
    InitializeCommonEvent(10, 9008000, 1042320110);
    InitializeCommonEvent(11, 9008000, 1042320111);
    InitializeCommonEvent(12, 9008000, 1042320112);
    InitializeCommonEvent(13, 9008000, 1042320113);
    InitializeCommonEvent(14, 9008000, 1042320114);
    InitializeCommonEvent(15, 9008000, 1042320115);
    InitializeCommonEvent(16, 9008000, 1042320116);
    InitializeCommonEvent(17, 9008000, 1042320117);
    InitializeCommonEvent(18, 9008000, 1042320118);
    InitializeCommonEvent(19, 9008000, 1042320119);
    InitializeCommonEvent(20, 9008000, 1042320200);
    InitializeCommonEvent(21, 9008000, 1042320120);
    InitializeCommonEvent(22, 9008000, 1042320121);
    InitializeCommonEvent(23, 9008000, 1042320122);
    InitializeCommonEvent(24, 9008000, 1042320123);
    InitializeCommonEvent(25, 9008000, 1042320124);
    InitializeCommonEvent(26, 9008000, 1042320125);
    InitializeCommonEvent(27, 9008000, 1042320126);
    InitializeCommonEvent(28, 9008000, 1042320127);
    InitializeCommonEvent(29, 9008000, 1042320128);
    InitializeCommonEvent(30, 9008000, 1042320129);
    InitializeCommonEvent(31, 9008000, 1042320130);
    InitializeCommonEvent(32, 9008000, 1042320131);
    InitializeCommonEvent(33, 9008000, 1042320132);
    InitializeCommonEvent(34, 9008000, 1042320133);
    InitializeCommonEvent(35, 9008000, 1042320134);
    InitializeCommonEvent(36, 9008000, 1042320135);
    InitializeCommonEvent(37, 9008000, 1042320136);
    InitializeCommonEvent(38, 9008000, 1042320230);
    InitializeCommonEvent(39, 9008000, 1042320137);
    InitializeCommonEvent(40, 9008000, 1042320138);
    InitializeCommonEvent(41, 9008000, 1042320139);
    InitializeCommonEvent(42, 9008000, 1042320140);
    InitializeCommonEvent(43, 9008000, 1042320141);
    InitializeCommonEvent(44, 9008000, 1042320142);
    InitializeCommonEvent(45, 9008000, 1042320143);
    InitializeCommonEvent(46, 9008000, 1042320144);
    InitializeCommonEvent(47, 9008000, 1042320145);
    InitializeCommonEvent(48, 9008000, 1042320146);
    InitializeCommonEvent(49, 9008000, 1042320147);
    InitializeCommonEvent(50, 9008000, 1042320148);
    InitializeCommonEvent(51, 9008000, 1042320149);
    InitializeCommonEvent(52, 9008000, 1042320150);
    InitializeCommonEvent(53, 9008000, 1042320151);
    InitializeCommonEvent(54, 9008000, 1042320152);
    InitializeCommonEvent(55, 9008000, 1042320153);
    InitializeCommonEvent(56, 9008000, 1042320154);
    InitializeCommonEvent(57, 9008000, 1042320155);
    InitializeCommonEvent(58, 9008000, 1042320156);
    InitializeCommonEvent(59, 9008000, 1042320157);
    InitializeCommonEvent(60, 9008000, 1042320158);
    InitializeCommonEvent(61, 9008000, 1042320159);
    InitializeCommonEvent(62, 9008000, 1042320160);
    InitializeCommonEvent(63, 9008000, 1042320161);
    InitializeCommonEvent(64, 9008000, 1042320162);
    InitializeCommonEvent(65, 9008000, 1042320163);
    InitializeCommonEvent(66, 9008000, 1042320164);
    InitializeCommonEvent(67, 9008000, 1042320165);
    InitializeCommonEvent(68, 9008000, 1042320166);
    
    InitializeCommonEvent(0, 90005460, 1042320200);
    InitializeCommonEvent(0, 90005461, 1042320200);
    InitializeCommonEvent(0, 90005462, 1042320200);
    InitializeEvent(0, 1042322220, 0);
    InitializeEvent(0, 1042322230, 0);
    InitializeEvent(0, 1042322580, 0);
    InitializeEvent(0, 1042322510, 1042321510, 1042322510, 1042322500, 1042323900);
});

$Event(1042322220, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, 1042322220);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1042320220, 3011, false, false, false);
    WaitFixedTimeSeconds(5);
    TriggerAISound(4020, 1042322220, TargetEntityType.Area);
    EndEvent();
});

$Event(1042322230, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, 1042322230);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1042320230, 3031, false, false, false);
    EndEvent();
});

$Event(1042322500, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5000);
    WaitFor(CharacterHasSpEffect(X0_4, 5411));
    ClearSpEffect(X0_4, 5000);
});

$Event(1042322510, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            if (!EventFlag(X8_4)) {
                WaitFor(
                    ObjActEventFlag(X12_4)
                        || HasMultiplayerState(MultiplayerState.MultiplayerPending)
                        || HasMultiplayerState(MultiplayerState.Multiplayer));
                if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
                    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                        SetEventFlagID(X8_4, ON);
                        WaitFixedTimeSeconds(1.3);
                        WaitFixedTimeSeconds(0.9);
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L20, !InArea(10000, X4_4));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        FadeToBlack(0, 0, true, -1);
                        DisplayGenericDialog(20700, PromptType.YESNO, NumberofOptions.NoButtons, 0, 5);
                        WaitFixedTimeSeconds(0.7);
                        SetSpEffect(10000, 4090);
                        PlaySE(10000, SoundType.CharacterMotion, 8700);
                        WaitFixedTimeSeconds(2.7);
                        DisableCharacter(10000);
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.Multiplayer));
                        SetSpEffect(10000, 4091);
                        FadeToBlack(0, 0, false, -1);
                        SetEventFlagID(11000601, ON);
                        if (!EventFlag(300)) {
                            WarpPlayer(11, 0, 0, 0, 11002697, 60);
                            SaveRequest();
                            SetPlayerRespawnPoint(11002697);
                            EndEvent();
                        }
L10:
                        WarpPlayer(11, 5, 0, 0, 11052680, 60);
                        SaveRequest();
                        SetPlayerRespawnPoint(11052680);
                        EndEvent();
L20:
                        SetSpEffect(10000, 4091);
                        EnableCharacter(10000);
                        FadeToBlack(0, 0, false, -1);
                        WaitFixedTimeSeconds(4.4);
L19:
                        ForceAnimationPlayback(X0_4, 2, false, true, false);
                        SetEventFlagID(X8_4, OFF);
                        EnableObjAct(X0_4, -1);
                        RestartEvent();
                    }
                }
            }
L0:
            ReproduceAssetAnimation(X0_4, 2);
            SetEventFlagID(X8_4, OFF);
            EnableObjAct(X0_4, -1);
            RestartEvent();
L3:
            DisableObjAct(X0_4, -1);
            SetSpEffect(10000, 4091);
            EnableCharacter(10000);
            ForceAnimationPlayback(10000, 60131, false, false, false);
            FadeToBlack(0, 0, false, -1);
L2:
            DisableObjAct(X0_4, -1);
            ForceAnimationPlayback(X0_4, 2, false, true, false);
            SetEventFlagID(X8_4, OFF);
        }
    }
L1:
    DisableObjAct(X0_4, -1);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && !HasMultiplayerState(MultiplayerState.Multiplayer));
    EnableObjAct(X0_4, -1);
    RestartEvent();
});

$Event(1042322400, Restart, function() {
    if (EventFlag(1042320400)) {
        DisableAsset(1042321400);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1042321400, false);
    CreateAssetfollowingSFX(1042321400, 101, 6);
    WaitFor(EventFlag(1042320401) && EventFlag(1042320402) && EventFlag(1042320403));
    SetEventFlagID(1042320400, ON);
    DeleteAssetfollowingSFX(1042321400, true);
    DisableAsset(1042321400);
});

$Event(1042322401, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4)) {
        RequestAssetDestruction(X4_4, 1);
        CreateAssetfollowingSFX(X8_4, 90, 800056);
        EndEvent();
    }
L0:
    WaitFor(AssetDestroyed(X4_4, Equal, 1));
    SetEventFlagID(X0_4, ON);
    CreateAssetfollowingSFX(X8_4, 90, 800056);
});

$Event(1042322402, Restart, function() {
    DisableAsset(1042321400);
    DisableAsset(1042321401);
    DisableAsset(1042321402);
    DisableAsset(1042321403);
    DisableAsset(1042321404);
    DisableAsset(1042321405);
    DisableAsset(1042321406);
});

$Event(1042322403, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetSpEffect(X4_4, 10196);
    ForceAnimationPlayback(X4_4, X8_4, true, false, false);
    WaitFor(
        CharacterHasSpEffect(X4_4, 5080)
            && (CharacterHasSpEffect(X0_4, X16_4, GreaterOrEqual, 1)
                || HasDamageType(X4_4, 0, DamageType.Unspecified)
                || CharacterAIState(X4_4, AIStateType.Alert)));
    if (!CharacterHasSpEffect(X0_4, X16_4, Equal, 0)) {
        WaitRandomTimeSeconds(0, 2);
    }
L0:
    ClearSpEffect(X4_4, 10196);
    ForceAnimationPlayback(X4_4, X12_4, false, true, false);
    RequestCharacterAIReplan(X4_4);
});

$Event(1042322404, Restart, function(X0_4, X4_4) {
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    WaitFor(EventFlag(X0_4));
    DisableCharacter(X4_4);
    DisableCharacterCollision(X4_4);
});

$Event(1042322580, Default, function() {
    RegisterLadder(1042320580, 1042320851, 1042321580);
    RegisterLadder(1042320582, 1042320853, 1042321582);
    RegisterLadder(1042320584, 1042320855, 1042321584);
});


