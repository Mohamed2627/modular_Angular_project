import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pageSize:number=2;
  pageIndex:number=1;
  list:any[]=[];
  totalItems=0;

  constructor(private http:HttpClient) { 
    this.fetchData()
  }
  pageChanged(val:any)
  {
    console.log(val)
    this.pageIndex=val
    this.fetchData()
  }
  fetchData(){
    let options={
      headers:new HttpHeaders({
        token:"+0qgmtoBewgvNNU4hkWmEK+P6+BSDXcLVudaWM1acTzhfrKnRU8QAQ3Ovt0U+QBEadjYPdCr3eauv+8AeTCv5CqSyJ4nob40xDiaDN1TaviPGLnL6k9zp+1Jb+Nz7fCZEE8N7AcphjIcC6agBOUlcioTUQ+xxG8Z5C7FUguYLPQFl51s5xWvDerLDUWfQUEf3mjNMYAeWZ4W1Fcz5BKho4Xj+Ndtk8fm"
      })
    }

    this.http.get<any>(`https://api.mohamed-sadek.com/Job/Get?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`,options).subscribe(
      (data)=>{
        console.log(data)
        this.list = data['Data']['Items'] as any[]
        this.totalItems = Number(data['Data']['Records'] )
      }
    )
  }

  ngOnInit() {
  }

}
export class APIResponse<TTTT>{
  Data!:TTTT;
  Message="";
  Success=true;
  IsAuthorized=true
}