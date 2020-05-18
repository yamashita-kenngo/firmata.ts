/**
 * 実行環境を判別する
 * 実行環境ごとの処理をする
 */

const platform: string = Deno.build.os;

switch (platform) {
    case 'windows':
        console.log("platform for Windows");
        break;
    case 'darwin':
        console.log("platform for Mac");
        break;
    default:
        console.log("platform for Linux");
}
 