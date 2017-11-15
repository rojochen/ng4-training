import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// 引入 Validators
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveComponent implements OnInit {
  complexForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.complexForm = fb.group({
      // 表示一定要輸入
      'firstName': [null, Validators.required],
      // 表示一定要輸入，而且最短為5個字元，最多為10個字元。有多個規則時用陣列包住。
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender': [null, Validators.required],
      'hiking': [false],
      'running': [false],
      'swimming': [false]
    });

    // 用來觀察表格元素的變化
    console.log(this.complexForm);
    this.complexForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  ngOnInit() {
  }
  // 提交的執行的 function
  submitForm(value: any): void {
    console.log('Reactive Form Data:', value);
  }
}
