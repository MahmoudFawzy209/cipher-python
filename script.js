// بيانات دروس وحلقات قناة شيفرة (32 حلقة مرتبة من الصفر للاحتراف)
const lessons = [
    {
        id: 1,
        title: "الدرس 1: تجهيز محرر الأكواد | طباعة أول سطر كود 🔥",
        description: "في هذا الدرس الأول، نتعرف على كيفية تثبيت لغة بايثون وتجهيز محرر الأكواد VS Code وكتابة أول سطر برمجي باستخدام دالة الطباعة print.",
        videoId: "UEPBHsuZZSU",
        thumbnail: "https://img.youtube.com/vi/UEPBHsuZZSU/hqdefault.jpg",
        filename: "lesson_1_intro.py",
        infographic: "infographics/1.png",
        code: `# print() : دالة طباعة وعرض المخرجات على الشاشة
# Lesson 1 : طباعة أول سطر كود في بايثون

print("Hello World")
print("مرحباً بكم في قناة شيفرة لتعلم بايثون!")`
    },
    {
        id: 2,
        title: "الدرس 2: المتغيرات النصية في لغة بايثون (النصوص Strings)",
        description: "سنتعرف على البيانات النصية (Strings) وكيفية تخزينها في متغير (Variable)، قواعد تسمية المتغيرات، والفرق بين SyntaxError و NameError.",
        videoId: "-GM2v-oXxPw",
        thumbnail: "https://img.youtube.com/vi/-GM2v-oXxPw/hqdefault.jpg",
        filename: "lesson_2_strings.py",
        infographic: "infographics/2.png",
        code: `#_________________ Data Type : أنواع البيانات_____________
# Strings : النصوص 
# syntax : قواعد كتابة الكود 

print("Hello person")

# variables : متغيرات
# Data = value

name = "person"
print(name)

user = 'ahmed'
print(user)`
    },
    {
        id: 3,
        title: "الدرس 3: أنواع المتغيرات الرقمية | الأعداد الصحيحة (Integers)",
        description: "نتعرف في هذا الدرس على المتغيرات الرقمية من نوع الأعداد الصحيحة (int)، وكيفية تعريفها وتخزين الأرقام الصحيحة وإجراء العمليات الأساسية عليها.",
        videoId: "yNL7sYqWFrE",
        thumbnail: "https://img.youtube.com/vi/yNL7sYqWFrE/hqdefault.jpg",
        filename: "lesson_3_integers.py",
        infographic: "infographics/3.png",
        code: `# Integers (int) : المتغيرات الرقمية (الأعداد الصحيحة)

age = 25
year = 2026
temperature = -5

print(age)
print(type(age))  # <class 'int'>`
    },
    {
        id: 4,
        title: "الدرس 4: أنواع المتغيرات الرقمية | الأعداد العشرية (Float)",
        description: "شرح المتغيرات الرقمية من نوع الأعداد العشرية (float) وكيفية التعامل مع الأرقام التي تحتوي على فاصلة عشرية في لغة بايثون.",
        videoId: "B7OVzgOyCQo",
        thumbnail: "https://img.youtube.com/vi/B7OVzgOyCQo/hqdefault.jpg",
        filename: "lesson_4_floats.py",
        infographic: "infographics/4.png",
        code: `# Float : المتغيرات الرقمية (الأعداد العشرية)

price = 99.5
pi = 3.14
weight = 72.8

print(price)
print(type(price))  # <class 'float'>`
    },
    {
        id: 5,
        title: "الدرس 5: العمليات الحسابية في لغة بايثون (Mathematics)",
        description: "كيفية إجراء العمليات الحسابية الأساسية في بايثون مثل الجمع، الطرح، الضرب، القسمة، الأسس، وباقي القسمة.",
        videoId: "b0J0ZOc8WME",
        thumbnail: "https://img.youtube.com/vi/b0J0ZOc8WME/hqdefault.jpg",
        filename: "lesson_5_math.py",
        infographic: "infographics/5.png",
        code: `# Mathematics : العمليات الحسابية في بايثون

x = 10
y = 3

print(x + y)   # Addition (الجمع)
print(x - y)   # Subtraction (الطرح)
print(x * y)   # Multiplication (الضرب)
print(x / y)   # Division (القسمة العادية)
print(x // y)  # Floor Division (القسمة الصحيحة)
print(x % y)   # Modulus (باقي القسمة)
print(x ** y)  # Exponent (الأسس)`
    },
    {
        id: 6,
        title: "الدرس 6: منطق وترتيب العمليات الحسابية | Arithmetic Logic",
        description: "فهم أولويات وترتيب تنفيذ العمليات الحسابية في بايثون (الأقواس، الأسس، الضرب والقسمة، ثم الجمع والطرح).",
        videoId: "0crdxnvPvXk",
        thumbnail: "https://img.youtube.com/vi/0crdxnvPvXk/hqdefault.jpg",
        filename: "lesson_6_arithmetic_logic.py",
        infographic: "infographics/6.png",
        code: `# Operator Precedence : ترتيب أولويات العمليات الحسابية
# 1. ()  : الأقواس
# 2. **  : الأسس
# 3. * / : الضرب والقسمة
# 4. + - : الجمع والطرح

result1 = 10 + 5 * 2
print(result1)  # Output = 20

result2 = (10 + 5) * 2
print(result2)  # Output = 30`
    },
    {
        id: 7,
        title: "الدرس 7: الدمج والإضافة في بايثون | Addition & Concatenation",
        description: "الفرق الجوهري بين عملية الجمع الرياضي للأرقام (Addition) وعملية دمج النصوص معاً (Concatenation) وتجنب خطأ TypeError.",
        videoId: "6QN_F80XRvk",
        thumbnail: "https://img.youtube.com/vi/6QN_F80XRvk/hqdefault.jpg",
        filename: "lesson_7_concatenation.py",
        infographic: "infographics/7.png",
        code: `# Addition vs Concatenation : الفرق بين الجمع والدمج

# Addition : جمع الأرقام
num1 = 20
num2 = 30
print(num1 + num2)  # 50

# Concatenation : دمج النصوص
first_name = "أحمد "
last_name = "محمد"
print(first_name + last_name)

# Numeric Strings : دمج النصوص الرقمية
print("20" + "30")  # 2030`
    },
    {
        id: 8,
        title: "الدرس 8: تحويل أنواع البيانات في بايثون | Data Casting",
        description: "شرح تفصيلي لتحويل أنواع البيانات (Type Conversion) باستخدام دوال int() و float() و str() لتجنب أخطاء العمليات الحسابية.",
        videoId: "OsB4LssMzzQ",
        thumbnail: "https://img.youtube.com/vi/OsB4LssMzzQ/hqdefault.jpg",
        filename: "lesson_8_casting.py",
        infographic: "infographics/8.png",
        code: `# Data Casting : تحويل أنواع البيانات

text_number = "20"
real_number = int(text_number)

print(real_number + 10)  # 30

# float to int : تحويل الرقم العشري إلى عدد صحيح
decimal_num = 15.8
print(int(decimal_num))  # 15

# int to str : تحويل الرقم إلى نص
age = 25
print("عمري هو: " + str(age))`
    },
    {
        id: 9,
        title: "الدرس 9: دالة ()input في بايثون: كيف تجعل برنامجك يتفاعل مع المستخدم؟ 🔥",
        description: "تعلم كيفية جعل البرنامج يسأل المستخدم ويستقبل منه البيانات باستخدام دالة الإدخال input() وكتابة أول برنامج تفاعلي.",
        videoId: "jm6cInUaxzA",
        thumbnail: "https://img.youtube.com/vi/jm6cInUaxzA/hqdefault.jpg",
        filename: "lesson_9_input.py",
        infographic: "infographics/9.png",
        code: `# input() : دالة الإدخال للتفاعل مع المستخدم

user_name = input("ما هو اسمك؟ ")
print("مرحباً بك يا " + user_name + " في عالم بايثون!")

# Note (str) : جميع البيانات الراجعة من دالة الإدخال تكون نصية
print(type(user_name))`
    },
    {
        id: 10,
        title: "الدرس 10: تحويل مُدخلات المستخدم إلى أعداد صحيحة بدون Error",
        description: "كيفية استخدام دالة int() مع دالة input() لاستقبال أرقام من المستخدم وبناء برنامج عملي يحسب العمر أو سنة الميلاد.",
        videoId: "ir8T4j0ig0M",
        thumbnail: "https://img.youtube.com/vi/ir8T4j0ig0M/hqdefault.jpg",
        filename: "lesson_10_input_int.py",
        infographic: "infographics/10.png",
        code: `# int(input()) : تحويل مدخلات المستخدم إلى عدد صحيح

current_year = 2026
age = int(input("أدخل عمرك الحالي: "))

birth_year = current_year - age
print("سنة ميلادك هي:", birth_year)`
    },
    {
        id: 11,
        title: "الدرس 11: تحويل البيانات الرقمية بدالة input | (الجزء الثالث)",
        description: "تطبيقات متقدمة على دالة الإدخال input() مع الأعداد الصحيحة والعشرية لإجراء عمليات حسابية متكاملة من مدخلات المستخدم.",
        videoId: "qgxRxU-HrAA",
        thumbnail: "https://img.youtube.com/vi/qgxRxU-HrAA/hqdefault.jpg",
        filename: "lesson_11_input_part3.py",
        infographic: "infographics/11.png",
        code: `# Calculator : حاسبة جمع رقمين من المستخدم

num1 = float(input("أدخل الرقم الأول: "))
num2 = float(input("أدخل الرقم الثاني: "))

total = num1 + num2
print("مجموع الرقمين هو:", total)`
    },
    {
        id: 12,
        title: "الدرس 12: معامِلات المقارنة في بايثون | Comparison Operators",
        description: "التعرف على معاملات المقارنة (==, !=, >, <, >=, <=) وكيف تعيد قيماً منطقية (True أو False) تمهيداً للجمل الشرطية.",
        videoId: "_vMV2WhYqHE",
        thumbnail: "https://img.youtube.com/vi/_vMV2WhYqHE/hqdefault.jpg",
        filename: "lesson_12_comparison.py",
        infographic: "infographics/12.png",
        code: `# Comparison Operators : معاملات المقارنة

x = 10
y = 5

print(x == y)  # Equal (هل يساوي؟)
print(x != y)  # Not Equal (هل لا يساوي؟)
print(x > y)   # Greater than (هل أكبر من؟)
print(x < y)   # Less than (هل أصغر من؟)
print(x >= 10) # Greater or Equal (أكبر من أو يساوي)`
    },
    {
        id: 13,
        title: "الدرس 13: شرح الجملة الشرطية في بايثون | if condition",
        description: "تعلم كيف تجعل برنامجك يفكر ويتخذ قرارات بناءً على شروط معينة باستخدام جملة if الشرطية وأهمية المسافة البادئة.",
        videoId: "4t-HxWv789w",
        thumbnail: "https://img.youtube.com/vi/4t-HxWv789w/hqdefault.jpg",
        filename: "lesson_13_if_condition.py",
        infographic: "infographics/13.png",
        code: `# if condition : الجملة الشرطية

score = int(input("أدخل درجتك: "))

if score >= 50:
    print("مبروك! لقد نجحت في الاختبار")
    print("تستحق التقدير")`
    },
    {
        id: 14,
        title: "الدرس 14: الجملة الشرطية في بايثون | elif & else",
        description: "توسيع القرارات الشرطية باستخدام elif لاختبار شروط متعددة و else لتنفيذ كود بديل عند عدم تحقق أي شرط.",
        videoId: "zAjB2Gjg2aU",
        thumbnail: "https://img.youtube.com/vi/zAjB2Gjg2aU/hqdefault.jpg",
        filename: "lesson_14_elif_else.py",
        infographic: "infographics/14.png",
        code: `# if / elif / else : الجمل الشرطية المتعددة

degree = int(input("أدخل الدرجة: "))

if degree >= 90:
    print("التقدير: ممتاز")
elif degree >= 80:
    print("التقدير: جيد جداً")
elif degree >= 50:
    print("التقدير: ناجح")
else:
    print("حظاً أوفر في المرة القادمة")`
    },
    {
        id: 15,
        title: "الدرس 15: شرح المُعامِلات المنطقية في بايثون | and .. or",
        description: "كيفية ربط أكثر من شرط في جملة واحدة باستخدام المعاملات المنطقية and (تحقق كل الشروط) و or (تحقق شرط واحد على الأقل).",
        videoId: "UoxH4-0pT14",
        thumbnail: "https://img.youtube.com/vi/UoxH4-0pT14/hqdefault.jpg",
        filename: "lesson_15_logical_operators.py",
        infographic: "infographics/15.png",
        code: `# Logical Operators (and / or) : المعاملات المنطقية

age = 20
has_id = True

if age >= 18 and has_id:
    print("يسمح لك بالدخول")
else:
    print("عفواً، لا يمكنك الدخول")`
    },
    {
        id: 16,
        title: "الدرس 16: المُعامِلات المنطقية or .. and في بايثون (الجزء الثاني)",
        description: "تطبيقات وأمثلة عملية متقدمة على دمج الشروط باستخدام and و or لبناء منطق برمجي قوي ودقيق.",
        videoId: "vtD2NBwNDRI",
        thumbnail: "https://img.youtube.com/vi/vtD2NBwNDRI/hqdefault.jpg",
        filename: "lesson_16_logical_part2.py",
        infographic: "infographics/16.png",
        code: `# Login Check : التحقق من بيانات تسجيل الدخول

username = input("اسم المستخدم: ")
password = input("كلمة المرور: ")

if (username == "admin" or username == "owner") and password == "1234":
    print("تم تسجيل الدخول بنجاح!")
else:
    print("بيانات الدخول غير صحيحة")`
    },
    {
        id: 17,
        title: "الدرس 17: كيفية التحقق من وجود بيانات مُخزَّنة في الذاكرة؟",
        description: "فهم القيم المنطقية للبيانات الفارغة والممتلئة (Truthy & Falsy values) وكيفية التحقق من أن المستخدم أدخل بيانات فعلية.",
        videoId: "yW4Wt5bZobo",
        thumbnail: "https://img.youtube.com/vi/yW4Wt5bZobo/hqdefault.jpg",
        filename: "lesson_17_truthy_falsy.py",
        infographic: "infographics/17.png",
        code: `# bool() : التحقق من وجود بيانات في المتغير

name = input("أدخل اسمك: ")

if bool(name):
    print("مرحباً بك يا", name)
else:
    print("لم تقم بإدخال أي اسم!")`
    },
    {
        id: 18,
        title: "الدرس 18: الفهرسة في لغة بايثون | Indexing and Slicing",
        description: "الوصول إلى الأحرف والعناصر الفردية عن طريق رقم الفهرس (Index) واقتطاع أجزاء من النصوص باستخدام (Slicing).",
        videoId: "EdytFzRKZXU",
        thumbnail: "https://img.youtube.com/vi/EdytFzRKZXU/hqdefault.jpg",
        filename: "lesson_18_indexing_slicing.py",
        infographic: "infographics/18.png",
        code: `# Indexing & Slicing : الفهرسة والاقتطاع في النصوص
# Index 0 : العد في بايثون يبدأ دائماً من الصفر

word = "Python"

print(word[0])    # First char : الحرف الأول
print(word[-1])   # Last char : الحرف الأخير
print(word[0:3])  # Slice : اقتطاع أول ثلاثة أحرف
print(word[2:])   # Slice to end : من الفهرس الثاني للنهاية`
    },
    {
        id: 19,
        title: "الدرس 19: مُعامِل العضوية في بايثون | Membership Operator",
        description: "استخدام معامل العضوية (in و not in) للبحث والتحقق من وجود نص أو عنصر داخل سلسلة نصية أو قائمة.",
        videoId: "imqNpvR8Hpw",
        thumbnail: "https://img.youtube.com/vi/imqNpvR8Hpw/hqdefault.jpg",
        filename: "lesson_19_membership.py",
        infographic: "infographics/19.png",
        code: `# Membership (in / not in) : معامل العضوية

email = input("أدخل بريدك الإلكتروني: ")

if "@" in email and "." in email:
    print("بريد إلكتروني صحيح")
else:
    print("صيغة البريد غير صحيحة")`
    },
    {
        id: 20,
        title: "الدرس 20: تنسيق النصوص في لغة بايثون | f-string والـ Escape Characters",
        description: "الطريقة الحديثة والاحترافية لدمج المتغيرات داخل النصوص باستخدام f-string، مع شرح رموز الهروب مثل \\n و \\t.",
        videoId: "NhhITKWKByA",
        thumbnail: "https://img.youtube.com/vi/NhhITKWKByA/hqdefault.jpg",
        filename: "lesson_20_fstring.py",
        infographic: "infographics/20.png",
        code: `# f-string & Escape Characters : تنسيق النصوص

name = "عمر"
age = 22

print(f"الاسم: {name}\\nالعمر: {age} سنة")
print("العمود الأول\\tالعمود الثاني")`
    },
    {
        id: 21,
        title: "الدرس 21: تنسيق مخرجات الكود والأرقام العشرية باستخدام الـ f-string (الجزء 2)",
        description: "مهارات متقدمة في تنسيق الأرقام العشرية وتحديد عدد الخانات بعد الفاصلة وفواصل الآلاف باستخدام f-string.",
        videoId: "nzb7RjdQ5GI",
        thumbnail: "https://img.youtube.com/vi/nzb7RjdQ5GI/hqdefault.jpg",
        filename: "lesson_21_fstring_numbers.py",
        infographic: "infographics/21.png",
        code: `# Formatting Numbers (f-string) : تنسيق الأرقام العشرية

price = 1250.56789

# .2f : تقريب لخانتين عشريتين فقط
print(f"السعر بعد التقريب: {price:.2f}")

# Comma separator : إضافة فاصلة الآلاف
balance = 1000000
print(f"الرصيد: {balance:,} جنيه")`
    },
    {
        id: 22,
        title: "الدرس 22: هياكل البيانات في لغة بايثون | القوائم (Lists)",
        description: "مدخل إلى هياكل البيانات وشرح القوائم (Lists) لتخزين مجموعة من العناصر في متغير واحد والوصول إليها بالفهرس.",
        videoId: "sRptdlu4XSo",
        thumbnail: "https://img.youtube.com/vi/sRptdlu4XSo/hqdefault.jpg",
        filename: "lesson_22_lists.py",
        infographic: "infographics/22.png",
        code: `# Lists : القوائم في بايثون

students = ["أحمد", "سارة", "محمد", "نور"]

print(students)
print("الطالب الأول:", students[0])
print("عدد الطلاب:", len(students))`
    },
    {
        id: 23,
        title: "الدرس 23: قوائم البيانات Lists (الجزء الثاني) | التعديل، الدمج، والحذف",
        description: "العمليات الأساسية على القوائم: تعديل العناصر، الإضافة بـ append و insert، والحذف بـ remove و pop.",
        videoId: "MbMnAWRD_c4",
        thumbnail: "https://img.youtube.com/vi/MbMnAWRD_c4/hqdefault.jpg",
        filename: "lesson_23_lists_methods.py",
        infographic: "infographics/23.png",
        code: `# List Methods : التعديل والإضافة والحذف في القوائم

fruits = ["تفاح", "موز", "برتقال"]

# Update : تعديل عنصر
fruits[1] = "مانجو"

# append() : إضافة عنصر في النهاية
fruits.append("عنب")

# remove() : حذف عنصر
fruits.remove("برتقال")

print(fruits)`
    },
    {
        id: 24,
        title: "الدرس 24: الحلقة التكرارية في بايثون | for loop",
        description: "شرح مفهوم التكرار في البرمجة وكيفية استخدام حلقة for loop للمرور على عناصر القائمة أو النص وتنفيذ الأوامر.",
        videoId: "iSNRvdHiX0s",
        thumbnail: "https://img.youtube.com/vi/iSNRvdHiX0s/hqdefault.jpg",
        filename: "lesson_24_for_loop.py",
        infographic: "infographics/24.png",
        code: `# for loop : الحلقة التكرارية

languages = ["Python", "JavaScript", "C++", "Java"]

for lang in languages:
    print(f"أنا أتعلم لغة: {lang}")`
    },
    {
        id: 25,
        title: "الدرس 25: الحلقة التكرارية في بايثون (الجزء الثاني) | for loop",
        description: "تطبيقات عملية وتمارين إضافية على استخدام الحلقات التكرارية for loop مع الشروط والقوائم.",
        videoId: "ZhHeZ3J5hsk",
        thumbnail: "https://img.youtube.com/vi/ZhHeZ3J5hsk/hqdefault.jpg",
        filename: "lesson_25_for_loop_part2.py",
        infographic: "infographics/25.png",
        code: `# for loop + if : استخدام الشروط داخل حلقة التكرار

numbers = [10, 25, 30, 45, 60]

for num in numbers:
    if num >= 30:
        print(f"الرقم {num} أكبر من أو يساوي 30")`
    },
    {
        id: 26,
        title: "الدرس 26: طريقة تحديث المتغيرات وإنشاء عداد بالـ for loop في بايثون",
        description: "كيفية إنشاء متغير عداد (Counter) أو جامع تراكمي وتحديث قيمته في كل دورة داخل حلقة for.",
        videoId: "F-UgPWvXl88",
        thumbnail: "https://img.youtube.com/vi/F-UgPWvXl88/hqdefault.jpg",
        filename: "lesson_26_loop_counter.py",
        infographic: "infographics/26.png",
        code: `# Counter : إنشاء عداد وحساب مجموع عناصر القائمة

prices = [100, 250, 150, 300]
total = 0

for price in prices:
    total += price

print("إجمالي المشتريات:", total)`
    },
    {
        id: 27,
        title: "الدرس 27: دالة Range مقابل Enumerate | تعديل عناصر القائمة",
        description: "الفرق بين دالة range() لتوليد نطاق أرقام ودالة enumerate() للحصول على الفهرس والعنصر معاً لتعديل القائمة.",
        videoId: "1u8GJe6XonI",
        thumbnail: "https://img.youtube.com/vi/1u8GJe6XonI/hqdefault.jpg",
        filename: "lesson_27_range_enumerate.py",
        infographic: "infographics/27.png",
        code: `# range() & enumerate() : توليد النطاقات والفهرسة التلقائية

for i in range(1, 6):
    print("الرقم:", i)

names = ["أحمد", "خالد", "منى"]
for index, name in enumerate(names):
    print(f"الفهرس {index}: {name}")`
    },
    {
        id: 28,
        title: "الدرس 28: التحكم في تنفيذ الكود | break & continue",
        description: "كيفية إيقاف الحلقة التكرارية بالكامل باستخدام break أو تخطي الدورة الحالية فقط باستخدام continue.",
        videoId: "lwx35jEhYB8",
        thumbnail: "https://img.youtube.com/vi/lwx35jEhYB8/hqdefault.jpg",
        filename: "lesson_28_break_continue.py",
        infographic: "infographics/28.png",
        code: `# break & continue : التحكم في الحلقات التكرارية

for num in range(1, 10):
    if num == 3:
        continue  # continue : تخطي الدورة الحالية
    if num == 7:
        break     # break : إيقاف الحلقة تماماً
    print(num)`
    },
    {
        id: 29,
        title: "الدرس 29: شرح الـ while loop في بايثون",
        description: "التعرف على حلقة التكرار الشرطية while loop التي تستمر في العمل طالما أن الشرط صحيح، وكيفية إيقافها.",
        videoId: "FZBzrKLM-HQ",
        thumbnail: "https://img.youtube.com/vi/FZBzrKLM-HQ/hqdefault.jpg",
        filename: "lesson_29_while_loop.py",
        infographic: "infographics/29.png",
        code: `# while loop : حلقة التكرار الشرطية

count = 1

while count <= 5:
    print(f"الدورة رقم: {count}")
    count += 1

print("انتهى التكرار!")`
    },
    {
        id: 30,
        title: "الدرس 30: شرح الـ List Comprehension في بايثون",
        description: "اختصار إنشاء القوائم وتطبيق الحلقات والشروط في سطر برمجي واحد أنيق وسريع باستخدام List Comprehension.",
        videoId: "zb0klVQ7EOU",
        thumbnail: "https://img.youtube.com/vi/zb0klVQ7EOU/hqdefault.jpg",
        filename: "lesson_30_list_comprehension.py",
        infographic: "infographics/30.png",
        code: `# List Comprehension : اختصار إنشاء القوائم

# Squares : إنشاء قائمة بمربعات الأعداد في سطر واحد
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Even numbers : استخراج الأعداد الزوجية فقط
evens = [n for n in range(10) if n % 2 == 0]
print(evens)`
    },
    {
        id: 31,
        title: "الدرس 31: مُعامِل الهوية في بايثون | Identity Operators",
        description: "فهم معامل الهوية (is و is not) والفرق بين تساوي القيم (==) وتطابق موقع الكائن في الذاكرة (is).",
        videoId: "VsEWCoVG1Ag",
        thumbnail: "https://img.youtube.com/vi/VsEWCoVG1Ag/hqdefault.jpg",
        filename: "lesson_31_identity_operators.py",
        infographic: "infographics/31.png",
        code: `# Identity Operators (is / is not) : معاملات الهوية

list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 == list2)  # True : تساوي القيم
print(list1 is list2)  # False : كائنان منفصلان في الذاكرة
print(list1 is list3)  # True : نفس الموقع في الذاكرة`
    },
    {
        id: 32,
        title: "الدرس 32: تعلم القاموس في بايثون | Dictionary in Python",
        description: "شرح هياكل بيانات القواميس (Dictionaries) لتخزين البيانات على هيئة مفتاح وقيمة (Key-Value Pairs) والوصول السريع إليها.",
        videoId: "3mwSkia8ab4",
        thumbnail: "https://img.youtube.com/vi/3mwSkia8ab4/hqdefault.jpg",
        filename: "lesson_32_dictionary.py",
        infographic: "infographics/32.png",
        code: `# Dictionary : القاموس في بايثون

student = {
    "name": "أحمد",
    "age": 21,
    "track": "Python"
}

print("اسم الطالب:", student["name"])
print("المسار:", student.get("track"))

# Add key : إضافة مفتاح جديد
student["grade"] = "امتياز"
print(student)`
    }
];

// Fallback images in case the sample thumbnails don't load
function handleImageError(img) {
    img.onerror = null; // prevents loops
    img.src = 'https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&w=800&q=80';
}

// Elements
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const searchInput = document.getElementById('search-input');
const lessonsContainer = document.getElementById('lessons-container');
const showMoreWrapper = document.getElementById('show-more-wrapper');
const showMoreBtn = document.getElementById('show-more-btn');

let showAllLessons = false;
const INITIAL_VISIBLE_COUNT = 3;

// Modal Elements
const modal = document.getElementById('lesson-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalIframe = document.getElementById('modal-iframe');
const modalFilename = document.getElementById('modal-filename');
const modalPre = document.getElementById('modal-pre');
const modalCode = document.getElementById('modal-code');
const copyBtn = document.getElementById('copy-code-btn');
const downloadBtn = document.getElementById('download-code-btn');
const downloadInfographicBtn = document.getElementById('download-infographic-btn');

// Admin Elements
const adminLockBtn = document.getElementById('admin-lock-btn');
const adminSettingsModal = document.getElementById('admin-settings-modal');
const closeAdminModalBtn = document.getElementById('close-admin-modal');
const adminModeCheckbox = document.getElementById('admin-mode-checkbox');
const geminiKeyInput = document.getElementById('gemini-key-input');
const githubTokenInput = document.getElementById('github-token-input');
const saveAdminSettingsBtn = document.getElementById('save-admin-settings-btn');
const adminEditCodeBtn = document.getElementById('admin-edit-code-btn');
const adminFormatCodeBtn = document.getElementById('admin-format-code-btn');
const adminSaveCodeBtn = document.getElementById('admin-save-code-btn');
const adminCodeTextarea = document.getElementById('admin-code-textarea');
const adminCopyPromptBtn = document.getElementById('admin-copy-prompt-btn');
const adminUploadInfographicBtn = document.getElementById('admin-upload-infographic-btn');
const adminInfographicFileInput = document.getElementById('admin-infographic-file-input');

const GITHUB_REPO = 'MahmoudFawzy209/cipher-python';
let codeOverrides = {};

// Load overrides from localStorage and lessons_overrides.json
async function loadLessonOverrides() {
    try {
        const localSaved = localStorage.getItem('cipher_code_overrides');
        if (localSaved) {
            codeOverrides = JSON.parse(localSaved);
        }
    } catch (e) {
        codeOverrides = {};
    }

    try {
        const res = await fetch('lessons_overrides.json?t=' + Date.now());
        if (res.ok) {
            const remoteOverrides = await res.json();
            Object.keys(remoteOverrides).forEach(id => {
                const localItem = codeOverrides[id];
                const remoteItem = remoteOverrides[id];
                if (!localItem || !localItem.updatedAt || (remoteItem.updatedAt && remoteItem.updatedAt >= localItem.updatedAt)) {
                    codeOverrides[id] = remoteItem;
                }
            });
            localStorage.setItem('cipher_code_overrides', JSON.stringify(codeOverrides));
        }
    } catch (e) {
        // Ignore fetch errors when offline
    }

    lessons.forEach(lesson => {
        if (codeOverrides[lesson.id] && codeOverrides[lesson.id].code) {
            lesson.code = codeOverrides[lesson.id].code;
        }
    });
}

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggleBtn.querySelector('i');

    // Save preference to localStorage
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Switch icon
    if (isDark) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
});

// Load saved theme & admin state
document.addEventListener('DOMContentLoaded', async () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const icon = themeToggleBtn.querySelector('i');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        icon.className = 'fa-solid fa-moon';
    } else {
        body.classList.add('dark-theme');
        icon.className = 'fa-solid fa-sun';
    }

    const isAdmin = localStorage.getItem('cipher_admin_mode') === 'true';
    if (isAdmin) {
        body.classList.add('admin-mode');
    }

    // Auto-load local Gemini key from .env if running on localhost
    if (!localStorage.getItem('cipher_gemini_key')) {
        try {
            const cfgRes = await fetch('/api/local-config');
            if (cfgRes.ok) {
                const cfg = await cfgRes.json();
                if (cfg.geminiKey) {
                    localStorage.setItem('cipher_gemini_key', cfg.geminiKey);
                }
            }
        } catch (e) {}
    }

    await loadLessonOverrides();
    renderLessons(lessons); // Render lessons on load
});

// Render Lessons function
function renderLessons(lessonsToRender, isSearching = false) {
    lessonsContainer.innerHTML = ''; // Clear container

    if (lessonsToRender.length === 0) {
        lessonsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">لا توجد نتائج مطابقة للبحث.</p>';
        if (showMoreWrapper) showMoreWrapper.classList.add('hidden');
        return;
    }

    const visibleLessons = (!showAllLessons && !isSearching)
        ? lessonsToRender.slice(0, INITIAL_VISIBLE_COUNT)
        : lessonsToRender;

    visibleLessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `
            <div class="lesson-thumb">
                <img src="${lesson.thumbnail}" alt="${lesson.title}" loading="lazy" onerror="handleImageError(this)">
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
            </div>
            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.description.substring(0, 85)}...</p>
            </div>
        `;

        // Add click event to open modal
        card.addEventListener('click', () => openModal(lesson));

        lessonsContainer.appendChild(card);
    });

    if (showMoreWrapper) {
        if (!showAllLessons && !isSearching && lessonsToRender.length > INITIAL_VISIBLE_COUNT) {
            showMoreWrapper.classList.remove('hidden');
        } else {
            showMoreWrapper.classList.add('hidden');
        }
    }
}

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        showAllLessons = true;
        renderLessons(lessons);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.trim().toLowerCase();
    if (term === '') {
        renderLessons(lessons, false);
        return;
    }
    const filtered = lessons.filter(lesson =>
        lesson.title.toLowerCase().includes(term) ||
        lesson.description.toLowerCase().includes(term)
    );
    renderLessons(filtered, true);
});

// Open Modal Data Population
let currentLessonCode = '';
let currentLessonFilename = '';
let currentLessonInfographic = '';
let currentLessonId = 1;

function resetEditorMode() {
    if (modalPre && adminCodeTextarea && adminEditCodeBtn && adminSaveCodeBtn) {
        modalPre.classList.remove('hidden');
        adminCodeTextarea.classList.add('hidden');
        adminEditCodeBtn.classList.remove('hidden');
        adminSaveCodeBtn.classList.add('hidden');
    }
}

function highlightAndFixComments(codeElement) {
    if (!codeElement) return;
    if (window.Prism) {
        Prism.highlightElement(codeElement);
    }
    // Fix bidirectional rendering inside comments so Arabic sentences with English words (e.g. (String), 'name')
    // and English-first term pairs (e.g. # Strings : النصوص) both display in their natural reading order
    const commentNodes = codeElement.querySelectorAll('.token.comment');
    commentNodes.forEach(node => {
        const text = node.textContent || '';
        const match = text.match(/^(\s*#[_\-\s←]*)(.*)$/s);
        if (!match) return;
        const prefix = match[1];
        const body = match[2];
        if (!body) return;

        // Find the first strong directional letter (Arabic vs Latin)
        const firstStrongMatch = body.match(/[\u0600-\u06FFa-zA-Z]/);
        const isArabicFirst = firstStrongMatch && /[\u0600-\u06FF]/.test(firstStrongMatch[0]);

        node.textContent = '';
        const prefixSpan = document.createTextNode(prefix);
        const bodySpan = document.createElement('span');
        bodySpan.setAttribute('dir', isArabicFirst ? 'rtl' : 'ltr');
        bodySpan.style.unicodeBidi = 'isolate';
        bodySpan.textContent = body;

        node.appendChild(prefixSpan);
        node.appendChild(bodySpan);
    });
}

function openModal(lesson) {
    modalTitle.textContent = lesson.title;
    modalDesc.textContent = lesson.description;
    // No autoplay=1 so YouTube counts organic user-initiated views
    modalIframe.src = `https://www.youtube.com/embed/${lesson.videoId}?rel=0`;
    modalFilename.textContent = lesson.filename;

    currentLessonCode = lesson.code;
    currentLessonFilename = lesson.filename;
    currentLessonInfographic = lesson.infographic || `infographics/${lesson.id}.png`;
    currentLessonId = lesson.id;

    resetEditorMode();
    modalCode.textContent = currentLessonCode;
    if (adminCodeTextarea) {
        adminCodeTextarea.value = currentLessonCode;
    }
    // Trigger PrismJS syntax highlighting and Bidi comment fix
    highlightAndFixComments(modalCode);

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Close Modal
function closeLessonModal() {
    resetEditorMode();
    modal.classList.remove('show');
    modalIframe.src = ''; // Stop video when closed
    document.body.style.overflow = 'auto'; // Restore background scroll
}

closeModal.addEventListener('click', closeLessonModal);

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeLessonModal();
    }
});

// Copy Code
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentLessonCode).then(() => {
        const icon = copyBtn.querySelector('i');
        icon.className = 'fa-solid fa-check';
        copyBtn.style.color = '#10b981'; // Green color for success

        setTimeout(() => {
            icon.className = 'fa-regular fa-copy';
            copyBtn.style.color = ''; // Reset color
        }, 2000);
    });
});

// Download Code File
downloadBtn.addEventListener('click', () => {
    const blob = new Blob([currentLessonCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentLessonFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Helper: Push file to GitHub repository via GitHub REST API
async function pushFileToGitHub(filePath, base64Content, commitMessage) {
    const token = (localStorage.getItem('cipher_github_token') || '').trim();
    if (!token) return false;

    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
    };

    let sha = null;
    try {
        const getRes = await fetch(apiUrl, { headers });
        if (getRes.ok) {
            const existing = await getRes.json();
            sha = existing.sha;
        }
    } catch (e) {
        // File might not exist yet
    }

    const bodyData = {
        message: commitMessage,
        content: base64Content
    };
    if (sha) bodyData.sha = sha;

    const putRes = await fetch(apiUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify(bodyData)
    });

    return putRes.ok;
}

// Helper: Encode UTF-8 string to Base64
function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary);
}

// Admin Settings Modal Handlers
if (adminLockBtn && adminSettingsModal) {
    adminLockBtn.addEventListener('click', () => {
        adminModeCheckbox.checked = body.classList.contains('admin-mode');
        if (geminiKeyInput) {
            geminiKeyInput.value = localStorage.getItem('cipher_gemini_key') || '';
        }
        githubTokenInput.value = localStorage.getItem('cipher_github_token') || '';
        adminSettingsModal.classList.add('show');
    });

    closeAdminModalBtn.addEventListener('click', () => {
        adminSettingsModal.classList.remove('show');
    });

    adminSettingsModal.addEventListener('click', (e) => {
        if (e.target === adminSettingsModal) {
            adminSettingsModal.classList.remove('show');
        }
    });

    saveAdminSettingsBtn.addEventListener('click', () => {
        const enabled = adminModeCheckbox.checked;
        localStorage.setItem('cipher_admin_mode', enabled ? 'true' : 'false');
        if (geminiKeyInput) {
            localStorage.setItem('cipher_gemini_key', geminiKeyInput.value.trim());
        }
        localStorage.setItem('cipher_github_token', githubTokenInput.value.trim());

        if (enabled) {
            body.classList.add('admin-mode');
        } else {
            body.classList.remove('admin-mode');
            resetEditorMode();
        }
        adminSettingsModal.classList.remove('show');
    });
}

// Smart local fallback formatter for bilingual comments (English on left, Arabic on right)
function smartLocalFormatPython(rawCode, lessonTitle) {
    const lines = rawCode.replace(/\r\n/g, '\n').split('\n');
    const formatted = [];
    for (let line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('#')) {
            const commentBody = trimmed.slice(1).trim();
            // If comment has a colon separating Arabic on the left and English on the right, swap so English is on left and Arabic on right
            if (commentBody.includes(':')) {
                const parts = commentBody.split(':');
                const left = parts[0].trim();
                const right = parts.slice(1).join(':').trim();
                const hasArabicLeft = /[\u0600-\u06FF]/.test(left);
                const hasEnglishRight = /[A-Za-z]/.test(right) && !/[\u0600-\u06FF]/.test(right);
                if (hasArabicLeft && hasEnglishRight) {
                    const indent = line.match(/^\s*/)[0];
                    formatted.push(`${indent}# ${right} : ${left}`);
                    continue;
                }
            }
        }
        formatted.push(line);
    }
    return formatted.join('\n').trim();
}

// Admin Format Code with Gemini AI Button
if (adminFormatCodeBtn && adminCodeTextarea) {
    adminFormatCodeBtn.addEventListener('click', async () => {
        // Switch into edit mode automatically so user can review before clicking Save
        if (adminCodeTextarea.classList.contains('hidden')) {
            adminCodeTextarea.value = currentLessonCode;
            modalPre.classList.add('hidden');
            adminCodeTextarea.classList.remove('hidden');
            adminEditCodeBtn.classList.add('hidden');
            adminSaveCodeBtn.classList.remove('hidden');
        }

        const rawCode = adminCodeTextarea.value.trim();
        if (!rawCode) return;

        let apiKey = (localStorage.getItem('cipher_gemini_key') || '').trim();
        if (!apiKey) {
            const entered = prompt('لتنسيق الكود عبر Gemini مجاناً، الصق مفتاح Gemini API Key من Google AI Studio (أو اضغط إلغاء للتنسيق المحلي السريع):');
            if (entered && entered.trim()) {
                apiKey = entered.trim();
                localStorage.setItem('cipher_gemini_key', apiKey);
                if (geminiKeyInput) geminiKeyInput.value = apiKey;
            }
        }

        const origHtml = adminFormatCodeBtn.innerHTML;
        adminFormatCodeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري تنسيق الكود...';

        const lessonObj = lessons.find(l => l.id === currentLessonId);
        const title = lessonObj ? lessonObj.title : modalTitle.textContent;

        if (apiKey) {
            try {
                const systemPrompt = `أنت خبير في تنسيق أكواد لغة بايثون (Python) التعليمية لقناة "شيفرة".
المطلوب: إعادة تنظيم وتنسيق الكود التالي ليصبح كوداً بصرياً بسيطاً، نظيفاً، ومنظماً بدون أي حشو بصري أو تكرار، مع الالتزام الصارم بهذه القواعد:

1. ممنوع تماماً كتابة كلمات أو عناوين حشو إنجليزية زائدة مثل:
   "Episode", "Concept", "Definition", "Example", "Literal String", "Variable Assignment", "Print Repetition" أو ما يشبهها.

2. عند تقديم مصطلح برمجي أساسي، اكتب المصطلح نفسه مباشرة ثم معناه بالعربية، مثل:
   # Strings : النصوص
   # Variable : المتغير
   (ولا تكتب أبداً "# Concept : النصوص (Strings)").

3. عند كتابة تعريف لمفهوم، اكتب التعريف بالعربية مباشرة بدون كلمة Definition، مثل:
   # سلسلة من الحروف أو الرموز تُستخدم لتمثيل النصوص

4. عند شرح سطر كود أو متغير، اكتب الشرح المختصر بالعربية مباشرة بدون مقدمات إنجليزية زائدة، مثل:
   # إضافة قيمة نصية (String) للمتغير 'name'
   # تكرار طباعة قيمة المتغير 'user' عدة مرات
   (ولا تكتب "# Variable Assignment : ..." ولا "# Print Repetition : ...").

5. عند الإشارة لمثال أو توضيح مباشر، استخدم هاش متبوعاً بسهم (# ←) مباشرة بدون كلمة Example، مثل:
   # ← طباعة نص مباشر

6. لا تكرر التعليقات ولا تزدحم الصفحة بالحشو البصري؛ اجعل الفواصل والتعليقات مختصرة ومفيدة فقط.
7. أعد الكود البرمجي فقط بدون أي نص خارجه وبدون علامات \`\`\`python.`;

                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `${systemPrompt}\n\nعنوان الحلقة: ${title}\n\nالكود المراد تنسيقه:\n${rawCode}` }]
                        }]
                    })
                });

                if (res.ok) {
                    const data = await res.json();
                    let formattedCode = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                    formattedCode = formattedCode.replace(/^```python\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/, '').trim();
                    if (formattedCode) {
                        adminCodeTextarea.value = formattedCode;
                        adminFormatCodeBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم التنسيق بـ Gemini! راجعه واضغط حفظ';
                        setTimeout(() => { adminFormatCodeBtn.innerHTML = origHtml; }, 2800);
                        return;
                    }
                } else {
                    alert('تأكد من صحة مفتاح Gemini API في إعدادات الأدمن (أيقونة القفل في الأسفل). سيتم تطبيق التنسيق المحلي السريع الآن.');
                }
            } catch (err) {
                // Fallback to smart local formatter
            }
        }

        // Fallback local formatting
        adminCodeTextarea.value = smartLocalFormatPython(rawCode, title);
        adminFormatCodeBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم التنسيق! راجعه واضغط حفظ';
        setTimeout(() => { adminFormatCodeBtn.innerHTML = origHtml; }, 2500);
    });
}

// Admin Inline Code Edit & Save
if (adminEditCodeBtn && adminSaveCodeBtn && adminCodeTextarea) {
    adminEditCodeBtn.addEventListener('click', () => {
        adminCodeTextarea.value = currentLessonCode;
        modalPre.classList.add('hidden');
        adminCodeTextarea.classList.remove('hidden');
        adminEditCodeBtn.classList.add('hidden');
        adminSaveCodeBtn.classList.remove('hidden');
        adminCodeTextarea.focus();
    });

    adminSaveCodeBtn.addEventListener('click', async () => {
        const newCode = adminCodeTextarea.value;
        currentLessonCode = newCode;

        const lessonObj = lessons.find(l => l.id === currentLessonId);
        if (lessonObj) {
            lessonObj.code = newCode;
        }

        codeOverrides[currentLessonId] = {
            ...(codeOverrides[currentLessonId] || {}),
            code: newCode,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem('cipher_code_overrides', JSON.stringify(codeOverrides));

        modalCode.textContent = currentLessonCode;
        highlightAndFixComments(modalCode);
        resetEditorMode();

        const origHtml = adminSaveCodeBtn.innerHTML;
        adminEditCodeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الحفظ...';

        // Try local server save (if running local helper) & GitHub API push
        let syncedRemote = false;
        try {
            const localRes = await fetch('/api/save-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentLessonId, code: newCode, overrides: codeOverrides })
            });
            if (localRes.ok) syncedRemote = true;
        } catch (e) {}

        if (!syncedRemote) {
            try {
                const jsonStr = JSON.stringify(codeOverrides, null, 2);
                syncedRemote = await pushFileToGitHub(
                    'lessons_overrides.json',
                    utf8ToBase64(jsonStr),
                    `Update code for lesson ${currentLessonId}`
                );
            } catch (e) {}
        }

        adminEditCodeBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم حفظ الكود!';
        setTimeout(() => {
            adminEditCodeBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> تعديل الكود';
            adminSaveCodeBtn.innerHTML = origHtml;
        }, 2200);
    });
}

// Admin Copy Ready-Made Infographic Prompt for ChatGPT
if (adminCopyPromptBtn) {
    adminCopyPromptBtn.addEventListener('click', () => {
        const lessonObj = lessons.find(l => l.id === currentLessonId);
        const title = lessonObj ? lessonObj.title : modalTitle.textContent;
        const description = lessonObj ? lessonObj.description : modalDesc.textContent;
        const codeText = (!adminCodeTextarea.classList.contains('hidden'))
            ? adminCodeTextarea.value
            : currentLessonCode;

        const promptText = `تصرّف كأنك خبير في تبسيط علوم البرمجة وتصميم الإنفوجراف التعليمي الاحترافي.

سأعطيك سكربت حلقة تعليمية في لغة Python، ومهمتك تحويل محتواها إلى إنفوجراف تعليمي متكامل باللغة العربية، يحاكي شكل صفحات الكشكول التعليمي المكتوب بخط اليد، كما في الصور المرجعية المرفقة.

**أولاً: الأسلوب البصري والتصميم**
- اجعل التصميم يبدو كصفحة حقيقية من كشكول مدرسي ذي أوراق مسطرة، مع ظهور حواف الورقة وحلقة التجليد الجانبية بشكل طبيعي.
- استخدم خطاً عربياً يدوياً واضحاً وجميلاً، مع الحفاظ على سهولة القراءة.
- استخدم الأزرق للشرح الأساسي، والأصفر لإبراز العناوين والمفاهيم المهمة، والأخضر والأحمر والألوان الأخرى للتنبيهات والملاحظات.
- قسّم الصفحة إلى أقسام تعليمية منظمة باستخدام إطارات ومربعات وعناوين ملونة.
- أضف رسومات توضيحية ومخططات وأسهم تربط بين المفاهيم، وجداول مقارنة عند الحاجة.
- اجعل الأكواد البرمجية داخل مربعات مستقلة بخلفية داكنة، مع تلوين Syntax Highlighting.
- اجعل النتيجة تبدو وكأنها مكتوبة ومرسومة يدوياً بواسطة مدرس محترف، وليست تصميماً رقمياً تقليدياً.

**ثانياً: المحتوى التعليمي**
حلّل سكربت الحلقة واستخرج منه:
1. عنواناً رئيسياً جذاباً يعبر عن موضوع الحلقة.
2. تعريفات المفاهيم والمصطلحات الأساسية.
3. شرح الأفكار البرمجية بطريقة مبسطة ومتدرجة.
4. أهم الأكواد والأمثلة العملية الواردة في الحلقة.
5. توضيح وظيفة كل كود والنتيجة المتوقعة منه.
6. المقارنات والفروق بين المفاهيم المتشابهة إن وجدت.
7. مخططات توضيحية لتسلسل التنفيذ أو آلية عمل الكود عند الحاجة.
8. ملاحظات مهمة وأخطاء شائعة ونصائح للمبتدئين.

**ثالثاً: شروط مهمة**
- لا تنسخ السكربت حرفياً، بل أعد تنظيمه وتلخيصه تعليمياً دون الإخلال بالمعلومات.
- لا تضف معلومات برمجية غير صحيحة أو أكواداً لم يتضمنها الشرح إلا إذا كانت ضرورية للتوضيح، مع تمييزها كأمثلة إضافية.
- حافظ على صحة كتابة الأكواد والرموز البرمجية الإنجليزية بدقة تامة.
- اجعل النص العربي سليماً وواضحاً، مع مراعاة اتجاه الكتابة من اليمين إلى اليسار.
- لا تزدحم الصفحة بالتفاصيل؛ اختر أهم المعلومات التي تساعد الطالب على فهم الحلقة وتذكرها.
- استخدم المساحة بذكاء، واجعل هناك تسلسلاً بصرياً واضحاً بين العناوين والشرح والأمثلة.
- لا تكرر المعلومات لمجرد ملء المساحة.

**رابعاً: الإخراج النهائي**
- صفحة إنفوجراف واحدة متكاملة، بالطول الرأسي (Portrait)، وبجودة عالية ودقة مناسبة للتحميل والطباعة.
- اجعلها مشابهة للكشكول التعليمي الموجود في الصور المرجعية من حيث الألوان والتقسيمات والرسومات والأسلوب اليدوي.
- يجب أن تكون النتيجة ملخصاً بصرياً تعليمياً يستطيع الطالب من خلاله مراجعة الحلقة وفهم أهم نقاطها دون الحاجة إلى مشاهدة الفيديو مرة أخرى.

**موضوع الحلقة وسكربت الشرح:**

عنوان الحلقة: ${title}
وصف الحلقة: ${description}

الكود البرمجي المشروح في الحلقة:
\`\`\`python
${codeText}
\`\`\``;

        navigator.clipboard.writeText(promptText).then(() => {
            const orig = adminCopyPromptBtn.innerHTML;
            adminCopyPromptBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم نسخ البرومبت الموحد! الصقه في ChatGPT';
            setTimeout(() => {
                adminCopyPromptBtn.innerHTML = orig;
            }, 2500);
        });
    });
}

// Admin Upload Infographic Image directly from PC
if (adminUploadInfographicBtn && adminInfographicFileInput) {
    adminUploadInfographicBtn.addEventListener('click', () => {
        adminInfographicFileInput.value = '';
        adminInfographicFileInput.click();
    });

    adminInfographicFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const origText = adminUploadInfographicBtn.innerHTML;
        adminUploadInfographicBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري رفع الصورة...';

        const reader = new FileReader();
        reader.onload = async () => {
            const dataUrl = reader.result;
            const base64Data = dataUrl.split(',')[1];

            // Save locally in browser for immediate preview/download
            try {
                localStorage.setItem(`cipher_infographic_${currentLessonId}`, dataUrl);
            } catch (err) {
                // Quota exceeded if image is very large, still push to server/GitHub
            }

            let uploadedRemote = false;
            // 1. Try local server if running locally
            try {
                const localRes = await fetch('/api/upload-infographic', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: currentLessonId, base64: base64Data })
                });
                if (localRes.ok) uploadedRemote = true;
            } catch (err) {}

            // 2. Try GitHub API if token is configured
            if (!uploadedRemote) {
                try {
                    uploadedRemote = await pushFileToGitHub(
                        `infographics/${currentLessonId}.png`,
                        base64Data,
                        `Upload infographic for lesson ${currentLessonId}`
                    );
                } catch (err) {}
            }

            adminUploadInfographicBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم رفع وحفظ الإنفوجراف!';
            setTimeout(() => {
                adminUploadInfographicBtn.innerHTML = origText;
            }, 2500);
        };
        reader.readAsDataURL(file);
    });
}

// Download Infographic Image
if (downloadInfographicBtn) {
    downloadInfographicBtn.addEventListener('click', async () => {
        // Check if there is a newly uploaded infographic in localStorage first
        const localDataUrl = localStorage.getItem(`cipher_infographic_${currentLessonId}`);
        if (localDataUrl) {
            const a = document.createElement('a');
            a.href = localDataUrl;
            a.download = `shefra-lesson-${currentLessonId}-infographic.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            return;
        }

        try {
            const response = await fetch(currentLessonInfographic + '?t=' + Date.now());
            if (!response.ok) {
                alert('لم يتم رفع ورقة إنفوجراف لهذه الحلقة بعد.');
                return;
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `shefra-lesson-${currentLessonId}-infographic.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            alert('لم يتم رفع ورقة إنفوجراف لهذه الحلقة بعد.');
        }
    });
}
