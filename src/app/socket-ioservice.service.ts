import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable'; 
import { AppSettings } from './app.setting'
import * as io from 'socket.io-client';

@Injectable()
export class SocketIOServiceService {

 private url = AppSettings.API_ENDPOINT; 
 private socket;

  constructor() { }
   
  sendMessage(message){ 
    this.socket.emit('add-message', message); 
  }

 getMessages() { 
   console.log("get Message");
   let observable = new Observable(
                    observer => 
                          { 
                             console.log("token ::"+ localStorage.getItem('token'));
                            
                              this.socket = io (this.url,{ query: 'token=' + localStorage.getItem('token')});
                              console.log(this.socket);
                              this.socket.on('message', (data) => 
                                        { 
                                          observer.next(data); 
                                        }); 
                              return () => 
                                        { 
                                          this.socket.disconnect(); 
                                        }; 
                            }) 
      return observable;                                       
    }


}
