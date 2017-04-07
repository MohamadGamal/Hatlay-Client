import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()
export class HttpClientService {

  headers:Headers;
  constructor(private http:Http) { }

  appendToken(header){
    this.headers = header||new Headers();
    this.headers.append("Content-Type","application/json");
    this.headers.append("x-access-token",localStorage.getItem('token'));    
  }

  public get(url:string , header:Headers = new Headers()){
    this.appendToken(header);
    return this.http.get(url,{headers:this.headers});
  }

  public post(url:string ,data, header:Headers = new Headers()){    
    this.appendToken(header);
    return this.http.post(url,data,{headers:this.headers});
  }

  public put(url:string ,data, header:Headers = new Headers()){    
    this.appendToken(header);
    return this.http.put(url,data,{headers:this.headers});  
  }  

  public delete(url:string , header:Headers = new Headers()){    
    this.appendToken(header);
    return this.http.delete(url,{headers:this.headers});  
  }

}
