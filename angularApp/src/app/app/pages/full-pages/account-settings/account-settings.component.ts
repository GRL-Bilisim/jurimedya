import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import * as swalFunctions from '../../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss', '../../../../assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit {
  swal =  swalFunctions;

  avatar:any="";
  activeTab = "general";
  generalFormSubmitted = false;
  changePasswordFormSubmitted = false;
  infoFormSubmitted = false;
  alertVisible = true;

  countries = [
      { value: "USA", name: 'USA' },
      { value: "UK", name: 'UK'},
      { value: "Canada", name: 'Canada' },
  ];

  selectedLanguages = ["English", "Spanish"];
  languages = [
      { value: "English", name: 'English' },
      { value: "Spanish", name: 'Spanish'},
      { value: "French", name: 'French' },
      { value: "Russian", name: 'Russian' },
      { value: "German", name: 'German'},
      { value: "Hindi", name: 'Hindi' },
      { value: "Arabic", name: 'Arabic' },
      { value: "Sanskrit", name: 'Sanskrit'},
  ];

  selectedMusic = ["Jazz", "Hip Hop"];
  music = [
      { value: "Rock", name: 'Rock' },
      { value: "Jazz", name: 'Jazz'},
      { value: "Disco", name: 'Disco' },
      { value: "Pop", name: 'Pop' },
      { value: "Techno", name: 'Techno'},
      { value: "Folk", name: 'Folk' },
      { value: "Hip Hop", name: 'Hip Hop' },
  ];

  selectedMovies = ["The Dark Knight", "Perl Harbour"];
  movies = [
      { value: "Avatar", name: 'Avatar' },
      { value: "The Dark Knight", name: 'The Dark Knight'},
      { value: "Harry Potter", name: 'Harry Potter' },
      { value: "Iron Man", name: 'Iron Man' },
      { value: "Spider Man", name: 'Spider Man'},
      { value: "Perl Harbour", name: 'Perl Harbour' },
      { value: "Airplane!", name: 'Airplane!' },
  ];

  generalForm = new FormGroup({
    username: new FormControl(localStorage.getItem('username'), [Validators.required]),
    name: new FormControl(localStorage.getItem('adi'), [Validators.required]),
    email: new FormControl(localStorage.getItem('eposta'), [Validators.required]),
    company: new FormControl(localStorage.getItem('unvani'), [Validators.required])
    
  });

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    retypeNewPassword: new FormControl('', [Validators.required,this.passwordMatcher.bind(this)])
  });

  infoForm = new FormGroup({
    bdate: new FormControl('', [Validators.required]),
    bio: new FormControl(''),
    phone: new FormControl(localStorage.getItem('telefon'), [Validators.required]),
    website: new FormControl('')
  });

  socialForm = new FormGroup({
    twitter: new FormControl(''),
    facebook: new FormControl(''),
    googlePlus: new FormControl(''),
    linkedin: new FormControl(''),
    instagram: new FormControl(''),
    quora: new FormControl('')
  });
  changeimg: string;
  imgtype: string;

  constructor(private http: HttpClient,private cdr:ChangeDetectorRef,) { }

  private passwordMatcher(control: FormControl): { [s: string]: boolean } {
    if (
        this.changePasswordForm &&
        (control.value !== this.changePasswordForm.controls.newPassword.value)
    ) {
        return { passwordNotMatch: true };
    }
    return null;
}

  ngOnInit() {


    this.avatar=localStorage.getItem('profilresim');
  }

  setActiveTab(tab) {
    this.activeTab = tab;
  }

  get gf() {
    return this.generalForm.controls;
  }

  get cpf() {
    return this.changePasswordForm.controls;
  }

  get inf() {
    return this.infoForm.controls;
  }

  onGeneralFormSubmit() {
    this.generalFormSubmitted = true;
    if (this.generalForm.invalid) {
      return;
    }else{

      const postUrl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_kullaniciguncelle";

      let postData = new FormData();
      postData.append('kullaniciadi' , this.generalForm.value.username);
      postData.append('adisoyadi' , this.generalForm.value.name);
      postData.append('email' , this.generalForm.value.email);
      postData.append('unvani' , this.generalForm.value.company);

      postData.append('userid' , localStorage.getItem('userid'));


      this.http.post(postUrl, postData).subscribe(data => {

          swal.fire({
            icon: "success",
            title: 'Güncelleme Başarılı!',
            text: 'Bilgiler Başarıyla Güncelleştirildi.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          })
      },
      err => {
           console.log('Error: ' + err.error);
       });


    }
  }

  onChangePasswordFormSubmit() {
    
    this.changePasswordFormSubmitted = true;
    if (this.changePasswordForm.invalid ) {
      return;
    }else{
     const postUrl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_sifreguncelle";

      let postData = new FormData();
      postData.append('sifre' , this.changePasswordForm.value.oldPassword);
      postData.append('yenisifre' , this.changePasswordForm.value.newPassword);
      postData.append('userid' , localStorage.getItem('userid'));


      this.http.post(postUrl, postData).subscribe(data => {

          swal.fire({
            icon: "success",
            title: 'Güncelleme Başarılı!',
            text: 'Şifre Başarıyla Güncelleştirildi.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          })
      

     
      },
      err => {

       
           console.log('Error: ' + err.error);
       });
       

      // console.log(this.changePasswordForm.value.oldPassword);
      // console.log(this.changePasswordForm.value.newPassword);
      // console.log(this.changePasswordForm.value.retypeNewPassword);

      

    }
  }
  public dosyayukle(filename,alanadi)
{

  const fileList: FileList = filename.target.files;

  var reader = new FileReader();

  reader.readAsDataURL(filename.target.files[0]); // read file as data url

  if (fileList.length > 0) {

    const file = fileList[0];
    this.changeimg = file.name;
    this.imgtype=file.type;
  }

  reader.onload = (event) => { // called once readAsDataURL is completed
    this.avatar= event.target.result;

    this.cdr.markForCheck();

  }

}

  onInfoFormSubmit() {
    this.infoFormSubmitted = true;
    if (this.infoForm.invalid) {
      return;
    }
  }

  onSocialFormSubmit() {
    if (this.socialForm.invalid) {
      return;
    }
  }

}
