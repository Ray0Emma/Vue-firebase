<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1 class="text-right">الملف الشخصي للمستخدم</h1>
                    <hr>
                    <div class="form-group">
                        <label class="float-right" for="firstname">الاسم</label>
                        <input type="text" id="firstname" class="form-control" v-model.lazy="userMainData.firstname">
                    </div>
                    <div class="form-group">
                        <label class="float-right" for="lastname">الكنية</label>
                        <input type="text" id="lastname" class="form-control" v-model.lazy="userMainData.lastname">
                    </div>
                    <div class="form-group">
                        <label class="float-right" for="age">العمر</label>
                        <input type="number" id="age" class="form-control" v-model.lazy="userMainData.age">
                    </div>
                    <div class="form-group">
                        <label class="float-right" for="password">كلمة المرور</label>
                        <input type="password" id="password" class="form-control" v-model.lazy="userMainData.password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label class="float-right" for="description">نبذة</label><br>
                    <textarea id="description" rows="5" class="form-control" v-model.lazy="description"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label class="float-right" for="graduate">
                            <input type="checkbox" id="graduate" value="متخرج" v-model="status"> متخرج
                        </label>
                        <label class="float-right" for="working">
                            <input type="checkbox" id="working" value="أعمل حاليًا" v-model="status"> أعمل حاليًا
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label class="float-right" for="male">
                        <input type="radio" id="male" value="ذكر" v-model="gender"> <span>ذكر</span>
                    </label>
                    <label class="float-right" for="female">
                        <input type="radio" id="female" value="أنثى" v-model="gender"> <span>أنثى</span>
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label class="float-right" for="subscriptionKind">نوع الاشتراك</label>
                    <select id="subscriptionKind" class="form-control" v-model="selectedSubscription">

                        <option v-for="kind in subscriptionKinds" v-bind:key="kind">
                            {{ kind }}
                        </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-1">
                    <button v-on:click.prevent="submitInfo" class="btn btn-primary">إرسال
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="card card-info">
                    <div class="card-header text-right">
                        <h4>البيانات المُدخلة</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-text text-right">
                            <p>الاسم:{{ userMainData.firstname }}</p>
                            <p>الكنية:{{ userMainData.lastname }}</p>
                            <p>العمر:{{ userMainData.age }}</p>
                            <p>كلمة المرور:{{ userMainData.password }}</p>
                            <p>نبذة: {{ description }}</p>
                            <p><strong>الوضع الحالي</strong></p>
                            <ul>
                                <li v-for="item in status" v-bind:key="item">{{ item }}</li>
                            </ul>
                            <p>النوع:{{ gender }}</p>
                            <p>نوع الاشتراك: {{ selectedSubscription }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
                userMainData: {
                    firstname: '',
                    lastname: '',
                    age: 0,
                    password: '',
                },
                description: 'اكتب نبذة قصيرة عنك!',
                status: [],
                gender: 'ذكر',
                selectedSubscription: 'فضي',
                subscriptionKinds: ['ذهبي', 'فضي', 'عادي']
            }
  },
  methods: {
    submitInfo() {
       alert("تمت معالجة البيانات");
    }
  },
  
}
</script>

<style>
@import "./assets/styles/app.css";
</style>
