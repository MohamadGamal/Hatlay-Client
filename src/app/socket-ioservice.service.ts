import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { Observable } from 'rxjs/Observable'; 
import * as io from 'socket.io-client';

@Injectable()
export class SocketIOServiceService {

 private url = 'http://localhost:8000'; 
 private socket;

  constructor() { }
   
  sendMessage(message){ 
    this.socket.emit('add-message', message); 
  }

 getMessages() { 
   let observable = new Observable(
                    observer => 
                          { 
                              this.socket = io (this.url,{ query: 'token=' + localStorage.getItem('token')});

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
