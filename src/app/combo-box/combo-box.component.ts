import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit {
  showDropdown: boolean = false
  selectedValue: string = '';
  rotate: boolean = false;
  comboNewList!: any[]
  showComboNewList: boolean = false
  comboList: any[] = [
    {
      id: 1,
      value: 'Item One'
    },
    {
      id: 2,
      value: 'Item Two'
    },
    {
      id: 3,
      value: 'Item Three'
    },
    {
      id: 4,
      value: 'Item Four'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(e: any) {
    const value = e.value.toLowerCase()
    if (value) {
      this.showDropdown = true
      this.comboNewList = this.comboList.filter(obj => Object.values(obj).some((val: any) => val.toString().includes(value)));
      this.showComboNewList = !this.showComboNewList
    } else {
      this.showComboNewList = !this.showComboNewList
      // this.comboNewList = []
    }
  }

  openDropdown() {
    this.showDropdown = !this.showDropdown
    this.rotate = !this.rotate
  }

  selectItem(e: MouseEvent | any, id: number) {
    this.selectedValue = e.target.innerText
  }

}
