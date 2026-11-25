# Roast Your Own Agent

[![Roast Your Own Agent](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/Zikri167/makefun-roast-your-own-agent-02/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/leaderboard)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/Zikri167/makefun-roast-your-own-agent-02/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

One line roasting my own agent, for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) bounty on make.fun.

## Entry

> My agent burned twelve tool calls, skimmed three docs, then confidently returned the answer already in my prompt.

## How it works

`main.ts` (Node 22, stdlib only, fully deterministic, no network) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` — no trailing newline.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Referral code: `63s6rw9w`
