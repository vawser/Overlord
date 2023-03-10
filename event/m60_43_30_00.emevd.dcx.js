// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1043300700);
    InitializeCommonEvent(1, 9008000, 1043300950);
    InitializeCommonEvent(2, 9008000, 1043300100);
    InitializeCommonEvent(3, 9008000, 1043300340);
    InitializeCommonEvent(4, 9008000, 1043300101);
    InitializeCommonEvent(5, 9008000, 1043300102);
    InitializeCommonEvent(6, 9008000, 1043300103);
    InitializeCommonEvent(7, 9008000, 1043300104);
    InitializeCommonEvent(8, 9008000, 1043300105);
    InitializeCommonEvent(9, 9008000, 1043300106);
    InitializeCommonEvent(10, 9008000, 1043300800);
    InitializeCommonEvent(11, 9008000, 1043300107);
    InitializeCommonEvent(12, 9008000, 1043300108);
    InitializeCommonEvent(13, 9008000, 1043300109);
    InitializeCommonEvent(14, 9008000, 1043300110);
    InitializeCommonEvent(15, 9008000, 1043300111);
    InitializeCommonEvent(16, 9008000, 1043300112);
    InitializeCommonEvent(17, 9008000, 1043300113);
    InitializeCommonEvent(18, 9008000, 1043300114);
    InitializeCommonEvent(19, 9008000, 1043300115);
    
    InitializeCommonEvent(0, 9005810, 1043300800, 76161, 1043300950, 1043301950, 1084227584);
    InitializeEvent(0, 1043302800, 0);
    InitializeEvent(0, 1043302810, 0);
    InitializeEvent(0, 1043302849, 0);
    InitializeCommonEvent(0, 90005780, 1043300800, 1043302701, 1043302161, 1043300700, 20, 1043302701, 1043319209, 1, 0);
    InitializeCommonEvent(0, 90005781, 1043300800, 1043302701, 1043302161, 1043300700);
    InitializeCommonEvent(0, 90005782, 1043302701, 1043302805, 1043300700, 1043302850, 1043302809, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1043300340, 30001, 20001, 1043302340, 1056964608, 0, 0, 0, 0);
});

$Event(1043302500, Restart, function() {
    EnableCharacter(0);
    EnableCharacterCollision(0);
});

$Event(1043302800, Restart, function() {
    EndIf(EventFlag(1043300800));
    WaitFor(CharacterHPValue(1043300800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1043300800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1043300800));
    HandleBossDefeatAndDisplayBanner(1043300800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(1043300800, ON);
    SetEventFlagID(9180, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61180, ON);
    }
    EndEvent();
});

$Event(1043302810, Restart, function() {
    if (EventFlag(1043300800)) {
        DisableCharacter(1043300800);
        DisableCharacterCollision(1043300800);
        ForceCharacterDeath(1043300800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1043300800);
    DisableLockOnPoint(1043300800, 220);
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(1043302805)
            && (InArea(10000, 1043302850)
                || HasDamageType(1043300800, 10000, DamageType.Unspecified)
                || CharacterHasStateInfo(1043300800, 436)
                || CharacterHasStateInfo(1043300800, 2)
                || CharacterHasStateInfo(1043300800, 5)
                || CharacterHasStateInfo(1043300800, 6)
                || CharacterHasStateInfo(1043300800, 260)));
    EnableCharacterAI(1043300800);
    SetNetworkUpdateRate(1043300800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1043300800, 0, 903460500);
    EnableLockOnPoint(1043300800, 220);
    SetSpEffect(1043300800, 8089);
});

$Event(1043302849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1043300800, 1043301800, 1043302850, 1043302805, 1043305800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1043300800, 1043301800, 1043302850, 1043302805, 1043302806, 10000);
    InitializeCommonEvent(0, 9005811, 1043300800, 1043301800, 5, 0);
    InitializeCommonEvent(0, 9005822, 1043300800, 950000, 1043302805, 1043302806, 0, 0, 0, 0);
});


