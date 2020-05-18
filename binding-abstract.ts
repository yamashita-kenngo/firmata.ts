/**
 * AbstaracBinding クラスをエクスポートする
 */
export class AbstractBinding{
    // Opens a connection to the serial port referenced by the path.
    open(path: string, options: any){
    }

    // Closes an open connection
    close(){
    }

    // Request a number of bytes from the SerialPort.
    read(buffer:Array<number>, offset:number, length:number){
    }

    // Write bytes to the SerialPort
    write(buffer:Array<number>){
    }
}

