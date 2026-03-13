import { world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    world.sendMessage("§a[!] Hello, Bedrock Systems Library!");
});
