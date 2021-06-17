import { Component, OnInit } from '@angular/core';
import { ForexService } from '../forex.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ForexData: any = "";
  fromcurrency = "";
  tocurrency = "";
  newarray = [];
  bestRate: any;
  worstRate: any;
  bestCompany: any;
  worstCompany: any;
  liveRate: any;

  constructor(private forexservice: ForexService) { }

  ngOnInit(): void {

  }
  onChangeFromCurrency(event) {
    this.fromcurrency = event.target.value;
  }
  onChangeToCurrency(event) {
    this.tocurrency = event.target.value;
  }


  getBestWorstRate() {
    //this.bestRate = "";
    //this.worstRate = "";

    this.newarray = [];
    for (var i = 0; i < this.ForexData.length; i++) {
      let item = this.ForexData[i].CompanyRate;
      this.newarray.push(item);
    }
    this.bestRate = Math.max(...this.newarray);
    this.worstRate = Math.min(...this.newarray);
    for (var i = 0; i < this.ForexData.length; i++) {
      if (this.ForexData[i].CompanyRate == this.bestRate) {
        this.bestCompany = this.ForexData[i].CompanyName;
      }
      if (this.ForexData[i].CompanyRate == this.worstRate) {
        this.worstCompany = this.ForexData[i].CompanyName;
      }
    }
  }
  getExchange() {
    console.log("Hi!");
    console.log(this.fromcurrency)
    console.log(this.tocurrency)
    this.forexservice.getLiveExchange(this.fromcurrency, this.tocurrency).subscribe(res => {
      console.log(res)
      this.liveRate = Object.values(res)[0];
    })


    let result = [];

    if (this.fromcurrency == "INR") {
      this.forexservice.getInrJson().subscribe((data: any) => {
        console.log(data);


        if (this.tocurrency == "USD") {
          this.ForexData = data.INR["USD"];
          console.log("USD Data", this.ForexData)
        }
        console.log("USD")
        if (this.tocurrency == "GBP") {
          this.ForexData = data.INR["GBP"];
          console.log("GBP Data", this.ForexData)
        }

        if (this.tocurrency == "EUR") {
          this.ForexData = data.INR["EUR"];
          console.log("EUR Data", this.ForexData)
        }
        if (this.tocurrency == "JPY") {
          this.ForexData = data.INR["JPY"];
          console.log("JPY Data", this.ForexData)
        }
        this.getBestWorstRate();
        // this.ForexData = data;
        // console.log(this.ForexData[0].CompanyName);
      });
    }
    if (this.fromcurrency == "USD") {
      this.forexservice.getUsdJson().subscribe((data: any) => {
        console.log(data);

        if (this.tocurrency == "INR") {
          this.ForexData = data.USD["INR"];
          console.log("INR Data", this.ForexData)

        }
        if (this.tocurrency == "GBP") {
          this.ForexData = data.USD["GBP"];
          console.log("GBP Data", this.ForexData)
        }
        if (this.tocurrency == "EUR") {
          this.ForexData = data.USD["EUR"];
          console.log("EUR Data", this.ForexData)
        }
        if (this.tocurrency == "JPY") {
          this.ForexData = data.USD["JPY"];
          console.log("JPY Data", this.ForexData)
        }
        this.getBestWorstRate();
        // this.ForexData = data;
        // console.log(this.ForexData[0].CompanyName);
      });
    }
    if (this.fromcurrency == "EUR") {
      this.forexservice.getEurJson().subscribe((data: any) => {
        console.log(data);

        if (this.tocurrency == "INR") {
          this.ForexData = data.EUR["INR"];
          console.log("INR Data", this.ForexData)
        }
        if (this.tocurrency == "GBP") {
          this.ForexData = data.EUR["GBP"];
          console.log("GBP Data", this.ForexData)
        }
        if (this.tocurrency == "USD") {
          this.ForexData = data.EUR["USD"];
          console.log("USD Data", this.ForexData)
        }
        if (this.tocurrency == "JPY") {
          this.ForexData = data.EUR["JPY"];
          console.log("JPY Data", this.ForexData)
        }
        this.getBestWorstRate();
        // this.ForexData = data;
        // console.log(this.ForexData[0].CompanyName);
      });
    }
    if (this.fromcurrency == "GBP") {
      this.forexservice.getGbpJson().subscribe((data: any) => {
        console.log(data);

        if (this.tocurrency == "INR") {
          this.ForexData = data.GBP["INR"];
          console.log("INR Data", this.ForexData)
        }
        if (this.tocurrency == "USD") {
          this.ForexData = data.GBP["USD"];
          console.log("USD Data", this.ForexData)
        }
        if (this.tocurrency == "EUR") {
          this.ForexData = data.GBP["EUR"];
          console.log("EUR Data", this.ForexData)
        }
        if (this.tocurrency == "JPY") {
          this.ForexData = data.GBP["JPY"];
          console.log("JPY Data", this.ForexData)
        }
        this.getBestWorstRate();
        // this.ForexData = data;
        // console.log(this.ForexData[0].CompanyName);
      });
    }
    if (this.fromcurrency == "JPY") {
      this.forexservice.getJpyJson().subscribe((data: any) => {
        console.log(data);


        if (this.tocurrency == "INR") {
          this.ForexData = data.JPY["INR"];
          console.log("INR Data", this.ForexData)
        }
        if (this.tocurrency == "GBP") {
          this.ForexData = data.JPY["GBP"];
          console.log("GBP Data", this.ForexData)
        }
        if (this.tocurrency == "EUR") {
          this.ForexData = data.JPY["EUR"];
          console.log("EUR Data", this.ForexData)
        }
        if (this.tocurrency == "USD") {
          this.ForexData = data.JPY["USD"];
          console.log("USD Data", this.ForexData)
        }
        this.getBestWorstRate();
        // this.ForexData = data;
        // console.log(this.ForexData[0].CompanyName);
      });
    }
    //this.forexservice.getForexData().subscribe((data: any) => {
    //   console.log(data);
    //   this.ForexData = data;
    //   console.log(this.ForexData[0].CompanyName);
    // });
    //   for (var i = 0; i < this.ForexData.length; i++) {
    //     debugger;
    //     let item = this.ForexData[i].CompanyRate;
    //     console.log(item)

    //   }
  }



}

