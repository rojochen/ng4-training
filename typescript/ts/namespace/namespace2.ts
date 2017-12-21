namespace com {
    export namespace bt{
       export namespace crm{
            export interface Service{
                log():void
            }

        }
    }
}

//JAVA package style ,不推 !
{
    let service : com.bt.crm.Service = null;
    // 此案例不能執行
    service.log();
}