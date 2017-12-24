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
    let service : com.bt.crm.Service  = {log(){ console.log("hello service")}};
    service.log();
}