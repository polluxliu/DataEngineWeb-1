/**
 * Created by paulliu on 2016/12/8.
 */

import {Component, OnInit} from '@angular/core';
import {CreateCase} from "./create-case";
import {UseCaseService} from '../use-case.service';
import {FileUploader} from '../../../../node_modules/ng2-file-upload';


let template = require('./simple-demo.html');
// webpack html imports
// let template = require('');


// const URL = '/api/';
const URL = 'http://10.255.249.120:8080/usecase/upload';

@Component({
  selector: 'content',template
})

export class CreateCaseComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  items_multiple: Array<any> = [
    { id: 1, text: 'Option #1' },
    { id: 2, text: 'Option #2' },
    { id: 3, text: 'Option #3' },
    { id: 4, text: 'Option #4' },
    { id: 5, text: 'Option #5' },
    { id: 6, text: 'Option #6' },
    { id: 7, text: 'Option #7' },
    { id: 8, text: 'Option #8' },
    { id: 9, text: 'Option #9' },
    { id: 10, text: 'Option #10' },
  ];



  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother (e:any):void {

    this.hasAnotherDropZoneOver = e;
  }


  values = ["", 'Increase business revenue', 'Optimize business eficiency'];
  data_Sources = ["", 'CDM', 'DMS', 'Data Layer', 'LMS'];
  data_Analysis_Models = ['','C4.5', 'K-means', 'Support vector machines', 'Apriori',
    'EM', 'PageRank', 'AdaBoost', 'kNN', 'Naive Bayes', 'CART'];
  contribution_BU_S=['','Sales', 'After sales', 'Marketing'];
  stages=['','SalIdea generation','Analysis','Validation','Implementationes'];

  submitted = false;
  model = new CreateCase('Subject', this.values[0], 'Business Scenario','result', this.data_Sources[0],
    'data_type_description',this.data_Analysis_Models[0], this.contribution_BU_S[0],
    this.stages[0], "2010-10-12 12:12:10","2016-12-12 12:12:10 ",'console',' I need help',"");

  constructor(private useCaseSercice: UseCaseService) {

  }
  onSubmit() {
     // this.submitted = true;
    this.useCaseSercice.postCreateList(JSON.stringify(this.model));
    // active = true;
    this.submitted = false;
  }

  // TODO: 完成后移除
  get submitJson() {
    return JSON.stringify(this.model);
  }

   active = true;
  // newSite() {
  //   this.model = new Site(5, '', '');
  //   this.active = false;
  //   setTimeout(() => this.active = true, 0);
  // }

}
