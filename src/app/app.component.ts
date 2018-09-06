import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRSP Marketing';
  public data: any;
  public text;

  public datacrsp: any;
  public textcrsp;

  constructor() {
    this.data = [
      {
        name: 'Digital Marketing',
        text: 'Online growth is the need of the hour, and we understand this need. For your company, we will meet all the online requirements, and prove to be your best digital marketing partner.'
      },
      {
        name: 'Website Design & Development',
        text: 'Our Website Design & Development team knows to execute your ideas on the screen along with our techniques, and unique implements unknown to other web designers.'
      },
      {
        name: 'Content Marketing',
        text: 'Words can allure anyone with the capability of putting an impression in someone’s mind. Our Content Marketing methodologies will present your company with the combination of words that were never combined before. '
      },
      {
        name: 'Mobile App Design',
        text: 'Most of the users all over the globe do business using their pocket pet. Your mobile app’s design will affect your company’s growth directly, and we will make sure that it’s not just proportional but exponential.'
      },
      {
        name: 'Graphics Designing',
        text: 'Graphic designing is the notion that attracts the audience virtually. We conduct researches and create themes according to the targeted crowd, and that helps the company to get leads easily.'
      },
      {
        name: 'Data Analysis',
        text: 'Raw data when harmonized using data analysis, gives results for better functioning of the company. Our experts conduct researches based on your company’s data to do all possible predictions taking your company in one direction, and that’s upwards.'
      },
      {
        name: 'Software Programs',
        text: 'It’s known that software programs make the life easier, and they are used for designing, modifying, researching and many more. We create all & in any language that your company requires.'
      },
      {
        name: 'Website Design & Development',
        text: 'Our Website Design & Development team knows to execute your ideas on the screen along with our techniques, and unique implements unknown to other web designers.'
      },
      {
        name: 'B2b Marketing',
        text: 'Think of spreading your product by finding the market across the globe. That’s only possible when large-scale sales and relations with other businesses are created.'
      },
      {
        name: 'Logo Design',
        text: 'Your logo design is your company’s identity. It’s the first thing to focus on, and we create it with the trustworthy, explanatory, and reliable look. We create multiple samples, and we do this till it satisfies your requirement.'
      },
      {
        name: 'Post Sales Support',
        text: 'If you have a business or a website that isn’t getting as many leads as expected, bring it to us, and we will make it better than before.'
      },
      {
        name: 'Digital Strategy & Analytics',
        text: 'Your investment is valuable, and a proper strategy is required. This can only be possible if you have a reliable strategic associate. On every step and at every platform we stand along with you for not just planning the present but the future.'
      },
    ];
    this.text = this.data[0].text;

    this.datacrsp = [
      {
        name: 'Bookkeeping services',
        text: 'Keeping a check on the financial processing of your business is a mandatory element to maintain the health of your business. Our bookkeeping service makes sure that any kind of mismanagement and wastage of investment must get avoided.'
      },
      {
        name: 'Accounting services',
        text: 'Excellent quality of accounting service with continues periodic check is necessary for saving a company from unnecessary expenses. Our experts know how to reduce this outflow of money and add it to further growth.'
      },
      {
        name: 'Account payable',
        text: 'Large or small, every kind of business needs a proper arrangement to execute account payable service. We do it with accuracy so any loss could be avoided.'
      },
      {
        name: 'Account Receivable',
        text: 'The inflow of money is important to run a company. More important is to manage it properly and our efficient experts know how to do that with perfection.  '
      },
      {
        name: 'Tax preparation',
        text: 'Tax preparation plays a major role in the financial plans that a company makes. Saving taxes with legal techniques is our specialty.'
      },
      {
        name: 'Payroll Service',
        text: 'With a brilliant accuracy, we offer all types of payroll services:  payroll calculations, new hire reporting, payroll tax payment, year-end tax forms etc.'
      },
      {
        name: 'Data Entry',
        text: 'Data entry could be an easy job but do you know someone who could do be time-efficient in it? Well, we are because we always give priority to our clients’ deadlines.'
      },
      {
        name: 'Virtual CFO',
        text: 'Being a CFO is a responsible job and if one needs a virtual CFO he should look for someone reliable and our company is looking forward to proving it. '
      },
      {
        name: 'Financial Consulting',
        text: 'For any kind of financial consulting, if you need help, we are here to guide you towards the right path by which your company could fulfill its financial goals. '
      },
    ];
    this.textcrsp = this.datacrsp[0].text;
  }

  onChange(deviceValue) {
    if (deviceValue) {
      this.text = this.data[deviceValue].text;
    }
    console.log(this.text);
  }

  onChangecrsp(devicevalue) {
    if (devicevalue) {
      this.textcrsp = this.datacrsp[devicevalue].text;
    }
    console.log(this.textcrsp);
  }



  ngOnInit() {
    

  }
}



