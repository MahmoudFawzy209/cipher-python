// بيانات دروس وحلقات قناة شيفرة (33 حلقة مرتبة من الصفر للاحتراف)
const lessons = [
    {
        id: 0,
        title: "الدرس التمهيدي: ما هي البرمجة؟ .. كيف تصنع برنامج؟ 🔥",
        description: "في هذا الفيديو التمهيدي، نتعرف على مفهوم البرمجة، كيف يعمل الكمبيوتر ويفهم لغة الآلة، ولماذا نستخدم لغات البرمجة مثل بايثون لصناعة البرامج والتطبيقات.",
        videoId: "a91CnT-Ct7c",
        thumbnail: "https://img.youtube.com/vi/a91CnT-Ct7c/maxresdefault.jpg",
        filename: "intro_what_is_programming.py",
        infographic: "infographics/1.webp",
        code: `# ========================================================
# الدرس التمهيدي : ما هي البرمجة؟ وكيف يفهم الكمبيوتر لغتنا؟
# ========================================================

# 1. كيف يفهم الكمبيوتر؟
# الحاسوب لا يفهم سوى لغة الإشارات الكهربائية (0 و 1) أو Binary Code.

# 2. لغات البرمجة عالية المستوى (High-Level):
# لغات مثل بايثون (Python) كُتبت بلغة سهلة ومفهومة للإنسان لنستطيع التخاطب مع الجهاز.

# 3. المترجم أو المفسر (Interpreter):
# يقوم بتحويل كود بايثون الذي نكتبه إلى لغة الآلة التي ينفذها المعالج فوراً.

print("مرحباً بك في عالم البرمجة مع لغة بايثون!")
print("الكمبيوتر ينفذ الأوامر سطراً بسطر بدقة وسرعة فائقة.")`
    },
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
const modalBackBtn = document.getElementById('modal-back-btn');
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

    // Apply any cached local overrides immediately and render lessons in 0ms without waiting for network
    try {
        const localSaved = localStorage.getItem('cipher_code_overrides');
        if (localSaved) {
            codeOverrides = JSON.parse(localSaved);
            lessons.forEach(lesson => {
                if (codeOverrides[lesson.id] && codeOverrides[lesson.id].code) {
                    lesson.code = codeOverrides[lesson.id].code;
                }
            });
        }
    } catch (e) {}

    renderLessons(lessons); // Instant render (0ms)

    // Load remote overrides & local config asynchronously in background
    loadLessonOverrides();

    if (!localStorage.getItem('cipher_gemini_key')) {
        fetch('/api/local-config')
            .then(r => r.ok ? r.json() : null)
            .then(cfg => {
                if (cfg && cfg.geminiKey) {
                    localStorage.setItem('cipher_gemini_key', cfg.geminiKey);
                }
            })
            .catch(() => {});
    }
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

        // Predictive Pre-warming: prepare YouTube connection & poster 200-400ms before user clicks!
        const prewarmThisLesson = () => {
            if (modalIframe && modalIframe.parentElement) {
                modalIframe.parentElement.style.backgroundImage = `url(${lesson.thumbnail})`;
                modalIframe.parentElement.style.backgroundSize = 'cover';
                modalIframe.parentElement.style.backgroundPosition = 'center';
            }
            // Pre-connect to this specific video embed
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = `https://www.youtube.com/embed/${lesson.videoId}`;
            document.head.appendChild(link);
        };

        card.addEventListener('pointerenter', prewarmThisLesson, { once: true });
        card.addEventListener('touchstart', prewarmThisLesson, { once: true, passive: true });

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
        const match = text.match(/^(\s*#[_\-\s←→]*)(.*)$/s);
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

    // Instant Visual Poster: show crisp lesson thumbnail instantly behind iframe
    if (modalIframe && modalIframe.parentElement) {
        modalIframe.parentElement.style.backgroundImage = `url(${lesson.thumbnail})`;
        modalIframe.parentElement.style.backgroundSize = 'cover';
        modalIframe.parentElement.style.backgroundPosition = 'center';
    }

    // لا يتم التشغيل التلقائي إطلاقاً إلا بضغط الزائر لضمان احتساب يوتيوب للمشاهدة الحقيقية
    modalIframe.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=0&enablejsapi=1&rel=0`;
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

    // Deep linking & Dynamic Canonical URLs for SEO and shareability
    try {
        history.pushState(null, '', `#lesson-${lesson.id}`);
        document.title = `${lesson.title} | قناة شيفرة لتعلم بايثون`;
    } catch (e) {}

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    // Campaign Conversion Event Tracking
    if (typeof window.trackCampaignEvent === 'function') {
        window.trackCampaignEvent('view_lesson', {
            lesson_id: lesson.id,
            lesson_title: lesson.title,
            video_id: lesson.videoId
        });
    }
}

// Close Modal
function closeLessonModal() {
    resetEditorMode();
    if (codeTerminal) codeTerminal.classList.add('hidden');
    if (terminalOutput) terminalOutput.innerHTML = '';
    modal.classList.remove('show');
    modalIframe.src = ''; // Stop video when closed
    if (modalIframe && modalIframe.parentElement) {
        modalIframe.parentElement.style.backgroundImage = 'none';
    }
    document.body.style.overflow = 'auto'; // Restore background scroll

    try {
        history.pushState(null, '', window.location.pathname + window.location.search);
        document.title = 'شيفرة | تعلم بايثون باحترافية من الصفر إلى الاحتراف';
    } catch (e) {}
}

// Check URL Hash on load or change (e.g. #lesson-3)
function checkUrlHashForLesson() {
    const hash = window.location.hash;
    const match = hash.match(/^#lesson-(\d+)$/);
    if (match) {
        const lessonId = parseInt(match[1], 10);
        const targetLesson = lessons.find(l => l.id === lessonId);
        if (targetLesson) {
            openModal(targetLesson);
        }
    }
}
window.addEventListener('hashchange', checkUrlHashForLesson);
checkUrlHashForLesson();

closeModal.addEventListener('click', closeLessonModal);
if (modalBackBtn) {
    modalBackBtn.addEventListener('click', closeLessonModal);
}

// Keep modal open even when clicking outside the modal box
// (Exit is ONLY allowed by clicking the Back button or the X close icon)
// modal.addEventListener('click', ...) was removed by request

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

    // Keep admin modal open when clicking outside - close ONLY via X icon
    // adminSettingsModal click-outside removed

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

5. عند الإشارة لمثال أو توضيح مباشر، استخدم هاش متبوعاً بسهم يشير لليسار باتجاه بداية النص العربي (# →) مباشرة بدون كلمة Example، مثل:
   # → طباعة نص مباشر

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
// IndexedDB storage for large files (Infographics) without localStorage 5MB quota limit
function openInfographicsDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open('ShefraInfographicsDB', 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('infographics')) {
                db.createObjectStore('infographics', { keyPath: 'id' });
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function saveInfographicToDB(lessonId, dataUrl) {
    try {
        const db = await openInfographicsDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction('infographics', 'readwrite');
            const store = tx.objectStore('infographics');
            store.put({ id: String(lessonId), data: dataUrl });
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject(tx.error);
        });
    } catch (e) {
        return false;
    }
}

async function getInfographicFromDB(lessonId) {
    try {
        const db = await openInfographicsDB();
        return new Promise((resolve) => {
            const tx = db.transaction('infographics', 'readonly');
            const store = tx.objectStore('infographics');
            const req = store.get(String(lessonId));
            req.onsuccess = () => resolve(req.result ? req.result.data : null);
            req.onerror = () => resolve(null);
        });
    } catch (e) {
        return null;
    }
}

// Upload Infographic
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

            // 1. Save in IndexedDB (handles large multi-megabyte images without quota errors)
            await saveInfographicToDB(currentLessonId, dataUrl);

            // Fallback attempt to localStorage if small
            try {
                localStorage.setItem(`cipher_infographic_${currentLessonId}`, dataUrl);
            } catch (err) {}

            let uploadedRemote = false;
            // 2. Try local server if running locally
            try {
                const localRes = await fetch('/api/upload-infographic', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: currentLessonId, base64: base64Data })
                });
                if (localRes.ok) uploadedRemote = true;
            } catch (err) {}

            // 3. Try GitHub API if token is configured
            if (!uploadedRemote) {
                try {
                    uploadedRemote = await pushFileToGitHub(
                        `infographics/${currentLessonId}.png`,
                        base64Data,
                        `Upload infographic for lesson ${currentLessonId}`
                    );
                } catch (err) {}
            }

            if (uploadedRemote) {
                adminUploadInfographicBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم حفظ ونشر الإنفوجراف!';
            } else {
                adminUploadInfographicBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم الحفظ في المتصفح!';
            }

            setTimeout(() => {
                adminUploadInfographicBtn.innerHTML = origText;
            }, 2500);
        };
        reader.readAsDataURL(file);
    });
}

// ========================================================
// محرك بايثون الخفيف المدمج (Lite In-Page Python Runner)
// تحميل متأخر في الخلفية دون أي تأثير على سرعة فتح الموقع
// ========================================================
const codeTerminal = document.getElementById('code-terminal');
const terminalOutput = document.getElementById('terminal-output');
const clearTerminalBtn = document.getElementById('clear-terminal-btn');
const closeTerminalBtn = document.getElementById('close-terminal-btn');
const runCodeOnlineBtn = document.getElementById('run-code-online-btn');
const terminalExecTime = document.getElementById('terminal-exec-time');

// ========================================================
// محرك تشغيل بايثون الهجين لموقع شيفرة (WebAssembly + Skulpt Fallback)
// ========================================================
let shefraPyWorker = null;
let skulptPromise = null;

function loadSkulptDirect() {
    if (window.Sk && window.Sk.builtinFiles) return Promise.resolve();
    if (skulptPromise) return skulptPromise;

    skulptPromise = new Promise((resolve, reject) => {
        const loadScript = (src) => {
            return new Promise((res, rej) => {
                const s = document.createElement('script');
                s.src = src;
                s.async = false;
                s.onload = res;
                s.onerror = rej;
                document.head.appendChild(s);
            });
        };

        loadScript('https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js')
            .then(() => loadScript('https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js'))
            .then(resolve)
            .catch(reject);
    });
    return skulptPromise;
}

function runWithSkulpt(code, outputElement, execTimeElement) {
    return loadSkulptDirect().then(() => {
        outputElement.innerHTML = '';

        const outf = (t) => {
            outputElement.appendChild(document.createTextNode(t));
            outputElement.scrollTop = outputElement.scrollHeight;
        };

        const builtinRead = (x) => {
            if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles["files"][x] === undefined) {
                throw "ملف غير موجود: '" + x + "'";
            }
            return window.Sk.builtinFiles["files"][x];
        };

        window.Sk.configure({
            output: outf,
            read: builtinRead,
            inputfun: (p) => promptTerminalInput(outputElement, p),
            inputfunTakesPrompt: true
        });

        const t0 = performance.now();
        return window.Sk.misceval.asyncToPromise(() => {
            return window.Sk.importMainWithBody("<stdin>", false, code, true);
        }).then(() => {
            const dur = ((performance.now() - t0) / 1000).toFixed(2);
            if (execTimeElement) {
                execTimeElement.innerHTML = `⏱️ ${dur}s`;
                execTimeElement.classList.remove('hidden');
            }
            return true;
        });
    });
}

function getPyodideWorker() {
    if (!shefraPyWorker) {
        shefraPyWorker = new Worker('pyodide-worker.js?v=26');
    }
    return shefraPyWorker;
}

// دالة التشغيل الذكية: تجرب Pyodide فإن تعذر بسبب الشبكة تنتقل فوراً وبسلاسة إلى Skulpt
function runPythonSmart(code, outputElement, execTimeElement, runButton, originalButtonHtml) {
    return new Promise((resolve) => {
        let hasFailed = false;
        let workerFinished = false;

        if (outputElement) outputElement.innerHTML = '<span class="term-info">⚡ جاري تشغيل الكود...</span>';
        if (execTimeElement) execTimeElement.classList.add('hidden');

        // مهلة 4 ثوانٍ إذا علق التحميل الأولي لـ WebAssembly بسبب اتصال الإنترنت
        const fallbackTimer = setTimeout(() => {
            if (!workerFinished) {
                hasFailed = true;
                if (shefraPyWorker) {
                    shefraPyWorker.terminate();
                    shefraPyWorker = null;
                }
                runWithSkulpt(code, outputElement, execTimeElement)
                    .then(resolve)
                    .catch((err) => {
                        outputElement.innerHTML = `<span class="term-error">❌ ${err.toString()}</span>`;
                        resolve(false);
                    })
                    .finally(() => {
                        if (runButton && originalButtonHtml) runButton.innerHTML = originalButtonHtml;
                    });
            }
        }, 4000);

        try {
            const worker = getPyodideWorker();
            let accumulatedError = '';

            const handleMsg = (e) => {
                if (hasFailed) return;
                const { type, text, success, executionTime } = e.data;

                if (type === 'stdout' && outputElement) {
                    if (outputElement.innerHTML.includes('جاري تشغيل الكود')) {
                        outputElement.innerHTML = '';
                    }
                    outputElement.appendChild(document.createTextNode(text));
                    outputElement.scrollTop = outputElement.scrollHeight;
                } else if (type === 'stderr') {
                    accumulatedError += text;
                    // إذا كان الخطأ متعلقاً بملفات النظام (init_fs_encoding أو exit(1))
                    if (text.includes('Fatal Python error') || text.includes('init_fs_encoding') || text.includes('exit(1)')) {
                        clearTimeout(fallbackTimer);
                        hasFailed = true;
                        workerFinished = true;
                        worker.removeEventListener('message', handleMsg);
                        if (shefraPyWorker) {
                            shefraPyWorker.terminate();
                            shefraPyWorker = null;
                        }
                        // الانتقال الفوري لمحرك Skulpt
                        runWithSkulpt(code, outputElement, execTimeElement)
                            .then(resolve)
                            .catch((err) => {
                                outputElement.innerHTML = `<span class="term-error">❌ ${err.toString()}</span>`;
                                resolve(false);
                            })
                            .finally(() => {
                                if (runButton && originalButtonHtml) runButton.innerHTML = originalButtonHtml;
                            });
                        return;
                    }
                    if (outputElement) {
                        const errSpan = document.createElement('span');
                        errSpan.className = 'term-error';
                        errSpan.textContent = text;
                        outputElement.appendChild(errSpan);
                        outputElement.scrollTop = outputElement.scrollHeight;
                    }
                } else if (type === 'finished') {
                    clearTimeout(fallbackTimer);
                    workerFinished = true;
                    worker.removeEventListener('message', handleMsg);

                    if (!success && (accumulatedError.includes('Fatal') || accumulatedError.includes('exit(1)'))) {
                        runWithSkulpt(code, outputElement, execTimeElement)
                            .then(resolve)
                            .finally(() => {
                                if (runButton && originalButtonHtml) runButton.innerHTML = originalButtonHtml;
                            });
                        return;
                    }

                    if (execTimeElement && executionTime) {
                        execTimeElement.innerHTML = `⏱️ ${executionTime}`;
                        execTimeElement.classList.remove('hidden');
                    }
                    if (runButton && originalButtonHtml) {
                        runButton.innerHTML = originalButtonHtml;
                    }
                    resolve(success);
                }
            };

            worker.addEventListener('message', handleMsg);
            worker.postMessage({ type: 'run', code, id: Date.now() });
        } catch (workerErr) {
            clearTimeout(fallbackTimer);
            runWithSkulpt(code, outputElement, execTimeElement)
                .then(resolve)
                .finally(() => {
                    if (runButton && originalButtonHtml) runButton.innerHTML = originalButtonHtml;
                });
        }
    });
}

function ensureSkulptLoaded() {
    loadSkulptDirect().catch(() => {});
    return Promise.resolve();
}

// تحميل هادئ بعد اكتمال تحميل الموقع بـ 2 ثانية
window.addEventListener('load', () => {
    setTimeout(() => {
        getPyodideWorker();
    }, 2000);
});

// ميزة سحب شاشة مخرجات بايثون للأعلى والأسفل بحرية تامة
const terminalResizer = document.getElementById('terminal-resizer');
if (terminalResizer && codeTerminal) {
    let isDragging = false;
    let startY = 0;
    let startHeight = 0;

    const onPointerDown = (e) => {
        isDragging = true;
        startY = e.clientY || (e.touches && e.touches[0].clientY);
        startHeight = codeTerminal.offsetHeight;
        terminalResizer.classList.add('is-dragging');
        document.body.style.userSelect = 'none';
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
        document.addEventListener('touchmove', onPointerMove, { passive: false });
        document.addEventListener('touchend', onPointerUp);
    };

    const onPointerMove = (e) => {
        if (!isDragging) return;
        const currentY = e.clientY || (e.touches && e.touches[0].clientY);
        const deltaY = startY - currentY;
        const newHeight = Math.max(90, Math.min(window.innerHeight * 0.75, startHeight + deltaY));
        codeTerminal.style.height = `${newHeight}px`;
        if (e.cancelable) e.preventDefault();
    };

    const onPointerUp = () => {
        if (!isDragging) return;
        isDragging = false;
        terminalResizer.classList.remove('is-dragging');
        document.body.style.userSelect = '';
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        document.removeEventListener('touchmove', onPointerMove);
        document.removeEventListener('touchend', onPointerUp);
    };

    terminalResizer.addEventListener('pointerdown', onPointerDown);
    terminalResizer.addEventListener('touchstart', onPointerDown, { passive: false });
}

if (clearTerminalBtn && terminalOutput) {
    clearTerminalBtn.addEventListener('click', () => {
        terminalOutput.innerHTML = '';
        if (terminalExecTime) terminalExecTime.classList.add('hidden');
    });
}

if (closeTerminalBtn && codeTerminal) {
    closeTerminalBtn.addEventListener('click', () => {
        codeTerminal.classList.add('hidden');
    });
}

function promptTerminalInput(containerElement, promptText) {
    return new Promise((resolve) => {
        if (!containerElement) {
            const val = window.prompt(promptText || 'أدخل قيمة input():');
            return resolve(val !== null ? val : '');
        }

        const inputLine = document.createElement('div');
        inputLine.className = 'term-input-line';

        if (promptText) {
            const promptSpan = document.createElement('span');
            promptSpan.className = 'term-input-prompt';
            promptSpan.textContent = promptText;
            inputLine.appendChild(promptSpan);
        }

        const inputElem = document.createElement('input');
        inputElem.type = 'text';
        inputElem.className = 'term-inline-input';
        inputElem.spellcheck = false;
        inputElem.autocomplete = 'off';
        inputLine.appendChild(inputElem);

        containerElement.appendChild(inputLine);
        containerElement.scrollTop = containerElement.scrollHeight;

        setTimeout(() => inputElem.focus(), 25);

        const onContainerClick = (e) => {
            if (e.target !== inputElem && document.body.contains(inputElem)) {
                inputElem.focus();
            }
        };
        containerElement.addEventListener('click', onContainerClick);

        inputElem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                const value = inputElem.value;
                containerElement.removeEventListener('click', onContainerClick);

                inputLine.remove();
                if (promptText) {
                    containerElement.appendChild(document.createTextNode(promptText));
                }
                const enteredText = document.createElement('span');
                enteredText.style.color = '#38bdf8';
                enteredText.style.fontWeight = '600';
                enteredText.textContent = value + '\n';
                containerElement.appendChild(enteredText);
                containerElement.scrollTop = containerElement.scrollHeight;

                resolve(value);
            }
        });
    });
}

if (runCodeOnlineBtn) {
    runCodeOnlineBtn.addEventListener('click', async () => {
        const codeToRun = currentLessonCode || '';
        if (!codeToRun.trim()) return;

        if (codeTerminal) codeTerminal.classList.remove('hidden');
        if (terminalOutput) {
            terminalOutput.innerHTML = '<span class="term-info">⚡ جاري تشغيل كود بايثون عبر WebAssembly...</span>';
        }
        if (terminalExecTime) terminalExecTime.classList.add('hidden');

        const btnOrigHtml = runCodeOnlineBtn.innerHTML;
        runCodeOnlineBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التنفيذ...';

        try {
            await runPythonSmart(codeToRun, terminalOutput, terminalExecTime, runCodeOnlineBtn, btnOrigHtml);
            if (typeof window.trackCampaignEvent === 'function') {
                window.trackCampaignEvent('run_python_code', { lesson_id: currentLessonId });
            }
        } catch (err) {
            if (terminalOutput) {
                const errSpan = document.createElement('span');
                errSpan.className = 'term-error';
                errSpan.textContent = `❌ ${err.toString()}`;
                terminalOutput.appendChild(errSpan);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        } finally {
            runCodeOnlineBtn.innerHTML = btnOrigHtml;
        }
    });
}

// ========================================================
// مختبر بايثون التفاعلي الحر (Python Sandbox Modal)
// ========================================================
const sandboxModal = document.getElementById('sandbox-modal');
const openSandboxHeroBtn = document.getElementById('open-sandbox-hero-btn');
const navSandboxLink = document.getElementById('nav-sandbox-link');
const closeSandboxModalBtn = document.getElementById('close-sandbox-modal');
const sandboxBackBtn = document.getElementById('sandbox-back-btn');
const sandboxCodeEditor = document.getElementById('sandbox-code-editor');
const sandboxPre = document.getElementById('sandbox-pre');
const sandboxHighlightedCode = document.getElementById('sandbox-highlighted-code');
const sandboxTerminalOutput = document.getElementById('sandbox-terminal-output');
const sandboxRunBtn = document.getElementById('sandbox-run-btn');
const sandboxCopyBtn = document.getElementById('sandbox-copy-btn');
const sandboxDownloadBtn = document.getElementById('sandbox-download-btn');
const sandboxClearBtn = document.getElementById('sandbox-clear-btn');
const clearSandboxOutputBtn = document.getElementById('clear-sandbox-output-btn');
const sandboxExecTime = document.getElementById('sandbox-exec-time');

// تحسين قواعد لغة بايثون في مكتبة Prism لتلوين الدوال المدمجة والبيانات المنطقية و None
function enhancePythonPrismGrammar() {
    if (window.Prism && Prism.languages && Prism.languages.python) {
        if (Prism.languages.python.keyword && Prism.languages.python.keyword.source.includes('|print|')) {
            Prism.languages.python.keyword = new RegExp(
                Prism.languages.python.keyword.source.replace('|print|', '|')
            );
        }
        if (Prism.languages.python.builtin && !Prism.languages.python.builtin.source.includes('print|')) {
            Prism.languages.python.builtin = new RegExp(
                Prism.languages.python.builtin.source.replace('\\b(?:', '\\b(?:print|')
            );
        }
        // إزالة True و False و None من الكلمات المفتاحية العادية وتخصيصها كـ boolean لتأخذ نفس لون الأرقام (السماوي الساطع)
        if (Prism.languages.python.keyword) {
            Prism.languages.python.keyword = new RegExp(
                Prism.languages.python.keyword.source.replace(/\b(?:True|False|None)\|?/g, '')
            );
        }
        Prism.languages.python.boolean = /\b(?:True|False|None)\b/;
    }
}
enhancePythonPrismGrammar();

// عناصر واجهة محرر الأكواد الموسعة
const sandboxLineNumbers = document.getElementById('sandbox-line-numbers');
const sandboxCursorPos = document.getElementById('sandbox-cursor-pos');
const sandboxDocStats = document.getElementById('sandbox-doc-stats');
const sandboxDiagnosticPill = document.getElementById('sandbox-diagnostic-pill');
const sandboxShortcutsBtn = document.getElementById('sandbox-shortcuts-btn');
const sandboxShortcutsModal = document.getElementById('sandbox-shortcuts-modal');
const closeShortcutsModalBtn = document.getElementById('close-shortcuts-modal');
const sandboxFontPlus = document.getElementById('sandbox-font-plus');
const sandboxFontMinus = document.getElementById('sandbox-font-minus');

// دالة إظهار إشعارات خفيفة وسريعة داخل المحرر
function showEditorToast(msg, icon = 'fa-check') {
    let toast = document.getElementById('sandbox-editor-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'sandbox-editor-toast';
        toast.className = 'editor-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: #38bdf8;"></i> ${msg}`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// محرك التشخيص والتحذير الذكي للغة بايثون (Python Diagnostics & Linter) مثل إضافات VS Code
let diagnosticTimer = null;
let currentDiagnostic = null;

function runPythonDiagnostics() {
    clearTimeout(diagnosticTimer);
    diagnosticTimer = setTimeout(() => {
        if (!sandboxCodeEditor) return;
        const code = sandboxCodeEditor.value || '';
        if (!code.trim()) {
            currentDiagnostic = null;
            renderDiagnostics(null);
            return;
        }

        let diag = null;
        const lines = code.split('\n');

        // 1. فحص القواعد الشائعة والتحذيرات السريعة (Missing colons, Unclosed quotes)
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            const lineNum = i + 1;

            if (trimmed.startsWith('#') || trimmed === '') continue;

            // التحقق من انتهاء جمل التحكم والتعريفات بنقطتين ':'
            if (/^(if|elif|else|for|while|def|class|try|except|finally|with)(\s+.*)?$/.test(trimmed) &&
                !trimmed.endsWith(':') && !trimmed.endsWith('\\')) {
                if (!trimmed.includes('#')) {
                    diag = {
                        type: 'warning',
                        line: lineNum,
                        message: `تنبيه: السطر ينقصه نقطتان ':' في نهايته`
                    };
                    break;
                }
            }

            // فحص علامات الاقتباس غير المغلقة في سطر واحد
            if (!trimmed.includes('"""') && !trimmed.includes("'''")) {
                const doubleQuotes = (line.match(/"/g) || []).length;
                const singleQuotes = (line.match(/'/g) || []).length;
                if (doubleQuotes % 2 !== 0) {
                    diag = {
                        type: 'warning',
                        line: lineNum,
                        message: `تنبيه: علامة تنصيص مزدوجة (") غير مغلقة في هذا السطر`
                    };
                    break;
                }
                if (singleQuotes % 2 !== 0) {
                    diag = {
                        type: 'warning',
                        line: lineNum,
                        message: `تنبيه: علامة تنصيص فردية (') غير مغلقة في هذا السطر`
                    };
                    break;
                }
            }
        }

        // 2. فحص هيكلي عميق بواسطة محلل بايثون (Skulpt AST Parser) إذا كان محملاً
        if (window.Sk && window.Sk.parse) {
            try {
                window.Sk.parse("<stdin>", code);
                diag = null; // الكود سليم بنسبة 100%
            } catch (err) {
                let errLine = 1;
                let errMsg = err.toString();
                if (err.traceback && err.traceback.length > 0) {
                    errLine = err.traceback[0].lineno || 1;
                } else if (err.args && err.args.v && Array.isArray(err.args.v) && err.args.v.length >= 2 && Array.isArray(err.args.v[1])) {
                    errLine = err.args.v[1][1] || 1;
                }
                const cleanMsg = err.args && err.args.v && err.args.v[0] ? (err.args.v[0].v || errMsg) : errMsg;
                diag = {
                    type: 'error',
                    line: errLine,
                    message: `خطأ نحوي (SyntaxError): ${cleanMsg}`
                };
            }
        }

        currentDiagnostic = diag;
        renderDiagnostics(diag);
    }, 350);
}

function renderDiagnostics(diag) {
    if (!sandboxDiagnosticPill) return;
    
    if (!diag) {
        sandboxDiagnosticPill.className = 'status-diagnostic status-ok';
        sandboxDiagnosticPill.innerHTML = '<i class="fa-solid fa-circle-check"></i> بايثون: الكود سليم 100%';
        sandboxDiagnosticPill.title = 'لا توجد أخطاء بناء جملة في الكود';
        sandboxDiagnosticPill.onclick = null;
    } else if (diag.type === 'error') {
        sandboxDiagnosticPill.className = 'status-diagnostic status-error';
        sandboxDiagnosticPill.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> سطر ${diag.line}: ${diag.message}`;
        sandboxDiagnosticPill.title = 'انقر للانتقال إلى سطر الخطأ';
        sandboxDiagnosticPill.onclick = () => goToLine(diag.line);
    } else {
        sandboxDiagnosticPill.className = 'status-diagnostic status-warning';
        sandboxDiagnosticPill.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> سطر ${diag.line}: ${diag.message}`;
        sandboxDiagnosticPill.title = 'انقر للانتقال إلى سطر التحذير';
        sandboxDiagnosticPill.onclick = () => goToLine(diag.line);
    }

    renderLineNumbers(diag);
}

function renderLineNumbers(diag) {
    if (!sandboxLineNumbers || !sandboxCodeEditor) return;
    const lines = (sandboxCodeEditor.value || '').split('\n');
    let html = '';
    for (let i = 1; i <= lines.length; i++) {
        if (diag && diag.line === i) {
            const cls = diag.type === 'error' ? 'line-err' : 'line-warn';
            html += `<span class="${cls}" title="${diag.message}">${i}</span>\n`;
        } else {
            html += i + '\n';
        }
    }
    sandboxLineNumbers.innerHTML = html;
}

function goToLine(lineNum) {
    if (!sandboxCodeEditor) return;
    const lines = sandboxCodeEditor.value.split('\n');
    let pos = 0;
    for (let i = 0; i < lineNum - 1 && i < lines.length; i++) {
        pos += lines[i].length + 1;
    }
    sandboxCodeEditor.focus();
    sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = pos;
    updateCursorStatus();
}

// تحديث مؤشرات السطر والعمود والإحصائيات
function updateCursorStatus() {
    if (window.sandboxCM) {
        const cursor = window.sandboxCM.getCursor();
        const lineNum = cursor.line + 1;
        const colNum = cursor.ch + 1;
        const totalLines = window.sandboxCM.lineCount();
        const val = window.sandboxCM.getValue();
        if (sandboxCursorPos) {
            sandboxCursorPos.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> سطر ${lineNum}، عمود ${colNum}`;
        }
        if (sandboxDocStats) {
            sandboxDocStats.textContent = `${totalLines} أسطر | ${val.length} حرف`;
        }
        return;
    }

    if (!sandboxCodeEditor) return;
    const val = sandboxCodeEditor.value || '';
    const pos = sandboxCodeEditor.selectionStart || 0;
    const linesUpToCursor = val.substring(0, pos).split('\n');
    const lineNum = linesUpToCursor.length;
    const colNum = linesUpToCursor[linesUpToCursor.length - 1].length + 1;
    const totalLines = val.split('\n').length;
    
    if (sandboxCursorPos) {
        sandboxCursorPos.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i> سطر ${lineNum}، عمود ${colNum}`;
    }
    if (sandboxDocStats) {
        sandboxDocStats.textContent = `${totalLines} أسطر | ${val.length} حرف`;
    }
}

function updateSandboxHighlight() {
    if (window.sandboxCM) {
        window.sandboxCM.refresh();
        updateCursorStatus();
        return;
    }
    if (!sandboxCodeEditor || !sandboxHighlightedCode) return;
    let code = sandboxCodeEditor.value || '';
    if (code.endsWith('\n')) code += ' ';
    sandboxHighlightedCode.textContent = code;
    if (window.Prism) {
        enhancePythonPrismGrammar();
        Prism.highlightElement(sandboxHighlightedCode);
    }
    
    // تحديث أرقام الأسطر التلقائية مع علامات التحذير
    renderLineNumbers(currentDiagnostic);
    
    // تشغيل فحص الأخطاء والتحذيرات اللحظي
    runPythonDiagnostics();
    
    updateCursorStatus();
}

// التحكم بحجم خط المحرر (A+ / A-)
let currentEditorFontSize = 15;
function setEditorFontSize(size) {
    currentEditorFontSize = Math.min(24, Math.max(12, size));
    const sizePx = currentEditorFontSize + 'px';
    const linePx = Math.round(currentEditorFontSize * 1.6) + 'px';
    
    if (window.sandboxCM) {
        const wrapper = window.sandboxCM.getWrapperElement();
        if (wrapper) {
            wrapper.style.setProperty('font-size', sizePx, 'important');
            wrapper.style.setProperty('line-height', linePx, 'important');
            window.sandboxCM.refresh();
        }
    }

    const editorPanel = document.querySelector('.sandbox-editor-panel');
    if (editorPanel) {
        editorPanel.style.setProperty('--editor-font-size', sizePx);
        editorPanel.style.setProperty('--editor-line-height', linePx);
    }
    if (sandboxCodeEditor) {
        sandboxCodeEditor.style.setProperty('font-size', sizePx, 'important');
        sandboxCodeEditor.style.setProperty('line-height', linePx, 'important');
    }
    if (sandboxPre) {
        sandboxPre.style.setProperty('font-size', sizePx, 'important');
        sandboxPre.style.setProperty('line-height', linePx, 'important');
    }
    if (sandboxHighlightedCode) {
        sandboxHighlightedCode.style.setProperty('font-size', sizePx, 'important');
        sandboxHighlightedCode.style.setProperty('line-height', linePx, 'important');
    }
    if (sandboxLineNumbers) {
        sandboxLineNumbers.style.setProperty('font-size', sizePx, 'important');
        sandboxLineNumbers.style.setProperty('line-height', linePx, 'important');
    }
}
if (sandboxFontPlus) sandboxFontPlus.addEventListener('click', () => setEditorFontSize(currentEditorFontSize + 2));
if (sandboxFontMinus) sandboxFontMinus.addEventListener('click', () => setEditorFontSize(currentEditorFontSize - 2));

// نافذة دليل الاختصارات
if (sandboxShortcutsBtn && sandboxShortcutsModal) {
    sandboxShortcutsBtn.addEventListener('click', () => {
        sandboxShortcutsModal.classList.add('show');
    });
}
if (closeShortcutsModalBtn && sandboxShortcutsModal) {
    closeShortcutsModalBtn.addEventListener('click', () => {
        sandboxShortcutsModal.classList.remove('show');
    });
}
if (sandboxShortcutsModal) {
    sandboxShortcutsModal.addEventListener('click', (e) => {
        if (e.target === sandboxShortcutsModal) {
            sandboxShortcutsModal.classList.remove('show');
        }
    });
}

// سجل التراجع والتقدم (Undo / Redo History Stack)
const sandboxHistory = [];
let sandboxHistoryIndex = -1;
const MAX_SANDBOX_HISTORY = 200;
let historyDebounceTimer = null;

function saveSandboxHistory(immediate = false) {
    if (!sandboxCodeEditor) return;
    const currentVal = sandboxCodeEditor.value;
    const pos = sandboxCodeEditor.selectionStart;
    
    const pushState = () => {
        if (sandboxHistoryIndex >= 0 && sandboxHistory[sandboxHistoryIndex].val === currentVal) {
            return;
        }
        if (sandboxHistoryIndex < sandboxHistory.length - 1) {
            sandboxHistory.splice(sandboxHistoryIndex + 1);
        }
        sandboxHistory.push({ val: currentVal, pos });
        if (sandboxHistory.length > MAX_SANDBOX_HISTORY) {
            sandboxHistory.shift();
        }
        sandboxHistoryIndex = sandboxHistory.length - 1;

        try {
            localStorage.setItem('shefra_sandbox_code', currentVal);
        } catch (_) {}
    };

    if (immediate) {
        if (historyDebounceTimer) clearTimeout(historyDebounceTimer);
        pushState();
    } else {
        if (historyDebounceTimer) clearTimeout(historyDebounceTimer);
        historyDebounceTimer = setTimeout(pushState, 350);
    }
}

function undoSandbox() {
    if (historyDebounceTimer) {
        clearTimeout(historyDebounceTimer);
        historyDebounceTimer = null;
    }
    if (sandboxHistoryIndex > 0) {
        sandboxHistoryIndex--;
        const state = sandboxHistory[sandboxHistoryIndex];
        sandboxCodeEditor.value = state.val;
        sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = state.pos;
        updateSandboxHighlight();
        showEditorToast('تراجع (Undo)', 'fa-rotate-left');
    }
}

function redoSandbox() {
    if (historyDebounceTimer) {
        clearTimeout(historyDebounceTimer);
        historyDebounceTimer = null;
    }
    if (sandboxHistoryIndex < sandboxHistory.length - 1) {
        sandboxHistoryIndex++;
        const state = sandboxHistory[sandboxHistoryIndex];
        sandboxCodeEditor.value = state.val;
        sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = state.pos;
        updateSandboxHighlight();
        showEditorToast('تقدم (Redo)', 'fa-rotate-right');
    }
}

// دوال الإجراءات البرمجية القابلة للاستخدام عبر أزرار شريط الأدوات والاختصارات معاً:
function toggleSandboxComment() {
    if (!sandboxCodeEditor) return;
    const val = sandboxCodeEditor.value;
    const start = sandboxCodeEditor.selectionStart;
    const end = sandboxCodeEditor.selectionEnd;
    const lineStart = val.lastIndexOf('\n', start - 1) + 1;
    const lineEnd = val.indexOf('\n', end);
    const effectiveEnd = lineEnd === -1 ? val.length : lineEnd;
    const lines = val.substring(lineStart, effectiveEnd).split('\n');
    
    const allCommented = lines.every(l => l.trim() === '' || l.trim().startsWith('#'));
    let newLines;
    if (allCommented) {
        newLines = lines.map(l => l.replace(/^(\s*)# ?/, '$1'));
    } else {
        newLines = lines.map(l => l.trim() === '' ? l : '# ' + l);
    }
    
    const replaced = newLines.join('\n');
    sandboxCodeEditor.value = val.substring(0, lineStart) + replaced + val.substring(effectiveEnd);
    sandboxCodeEditor.selectionStart = lineStart;
    sandboxCodeEditor.selectionEnd = lineStart + replaced.length;
    saveSandboxHistory();
    updateSandboxHighlight();
    showEditorToast(allCommented ? 'تم إلغاء التهميش' : 'تم تهميش الكود (#)', 'fa-hashtag');
}

function duplicateSandboxLine(isUp = false) {
    if (!sandboxCodeEditor) return;
    const val = sandboxCodeEditor.value;
    const start = sandboxCodeEditor.selectionStart;
    const end = sandboxCodeEditor.selectionEnd;
    const lineStart = val.lastIndexOf('\n', start - 1) + 1;
    const lineEnd = val.indexOf('\n', end);
    const effectiveEnd = lineEnd === -1 ? val.length : lineEnd;
    const isFullLineSelected = (start === lineStart && end === effectiveEnd);

    if (start !== end && !isFullLineSelected) {
        // تكرار النص المحدد فقط
        const selectedText = val.substring(start, end);
        sandboxCodeEditor.value = val.substring(0, end) + selectedText + val.substring(end);
        sandboxCodeEditor.selectionStart = end;
        sandboxCodeEditor.selectionEnd = end + selectedText.length;
    } else {
        // تكرار السطر بالكامل في سطر جديد
        const lineContent = val.substring(lineStart, effectiveEnd);
        if (isUp) {
            sandboxCodeEditor.value = val.substring(0, lineStart) + lineContent + '\n' + val.substring(lineStart);
            sandboxCodeEditor.selectionStart = start;
            sandboxCodeEditor.selectionEnd = end;
        } else {
            sandboxCodeEditor.value = val.substring(0, effectiveEnd) + '\n' + lineContent + val.substring(effectiveEnd);
            const offset = lineContent.length + 1;
            sandboxCodeEditor.selectionStart = start + offset;
            sandboxCodeEditor.selectionEnd = end + offset;
        }
    }
    saveSandboxHistory(true);
    updateSandboxHighlight();
    showEditorToast(isUp ? 'تم تكرار السطر لأعلى [Shift + Alt + ↑]' : 'تم تكرار السطر لأسفل [Shift + Alt + ↓]', 'fa-clone');
}

function formatSandboxCode() {
    if (!sandboxCodeEditor) return;
    let code = sandboxCodeEditor.value;
    if (!code.trim()) return;

    const lines = code.split('\n');
    const formattedLines = lines.map(line => {
        let trimmedRight = line.replace(/\s+$/, '');
        if (!trimmedRight.includes('"') && !trimmedRight.includes("'") && !trimmedRight.trim().startsWith('#')) {
            trimmedRight = trimmedRight
                .replace(/\s*([=+\-*/<>]=?|==|!=)\s*/g, ' $1 ')
                .replace(/\s*,\s*/g, ', ')
                .replace(/\s*:\s*$/, ':');
        }
        return trimmedRight;
    });

    const newCode = formattedLines.join('\n');
    sandboxCodeEditor.value = newCode;
    saveSandboxHistory();
    updateSandboxHighlight();
    showEditorToast('تم تنسيق وترتيب الكود بنجاح ✨', 'fa-wand-magic-sparkles');
}

// منظومة البحث والاستبدال المدمجة (Find & Replace Widget)
const sandboxFindWidget = document.getElementById('sandbox-find-widget');
const sandboxFindBtn = document.getElementById('sandbox-find-btn');
const findInput = document.getElementById('find-input');
const replaceInput = document.getElementById('replace-input');
const findCount = document.getElementById('find-count');
const findNextBtn = document.getElementById('find-next-btn');
const findPrevBtn = document.getElementById('find-prev-btn');
const replaceOneBtn = document.getElementById('replace-one-btn');
const replaceAllBtn = document.getElementById('replace-all-btn');
const closeFindBtn = document.getElementById('close-find-btn');

let findMatches = [];
let currentMatchIndex = -1;

function openFindWidget() {
    if (!sandboxFindWidget) return;
    sandboxFindWidget.classList.remove('hidden');
    if (findInput) {
        findInput.focus();
        findInput.select();
        updateFindMatches();
    }
}

function closeFindWidget() {
    if (!sandboxFindWidget) return;
    sandboxFindWidget.classList.add('hidden');
    if (sandboxCodeEditor) sandboxCodeEditor.focus();
}

function updateFindMatches() {
    if (!sandboxCodeEditor || !findInput || !findCount) return;
    const query = findInput.value;
    const code = sandboxCodeEditor.value;
    findMatches = [];
    currentMatchIndex = -1;

    if (!query) {
        findCount.textContent = '0/0';
        return;
    }

    let pos = 0;
    const lowerCode = code.toLowerCase();
    const lowerQuery = query.toLowerCase();

    while ((pos = lowerCode.indexOf(lowerQuery, pos)) !== -1) {
        findMatches.push({ start: pos, end: pos + query.length });
        pos += query.length;
    }

    if (findMatches.length > 0) {
        const selStart = sandboxCodeEditor.selectionStart;
        currentMatchIndex = findMatches.findIndex(m => m.start >= selStart);
        if (currentMatchIndex === -1) currentMatchIndex = 0;
        selectCurrentMatch();
    } else {
        findCount.textContent = '0/0';
    }
}

function selectCurrentMatch() {
    if (findMatches.length === 0 || currentMatchIndex === -1) {
        if (findCount) findCount.textContent = '0/0';
        return;
    }
    const match = findMatches[currentMatchIndex];
    sandboxCodeEditor.focus();
    sandboxCodeEditor.selectionStart = match.start;
    sandboxCodeEditor.selectionEnd = match.end;
    if (findCount) findCount.textContent = `${currentMatchIndex + 1}/${findMatches.length}`;
}

function findNext() {
    if (findMatches.length === 0) return;
    currentMatchIndex = (currentMatchIndex + 1) % findMatches.length;
    selectCurrentMatch();
}

function findPrev() {
    if (findMatches.length === 0) return;
    currentMatchIndex = (currentMatchIndex - 1 + findMatches.length) % findMatches.length;
    selectCurrentMatch();
}

function replaceCurrentMatch() {
    if (findMatches.length === 0 || currentMatchIndex === -1 || !replaceInput) return;
    const match = findMatches[currentMatchIndex];
    const rep = replaceInput.value;
    const val = sandboxCodeEditor.value;
    sandboxCodeEditor.value = val.substring(0, match.start) + rep + val.substring(match.end);
    saveSandboxHistory();
    updateSandboxHighlight();
    updateFindMatches();
}

function replaceAllMatches() {
    if (findMatches.length === 0 || !replaceInput) return;
    const query = findInput.value;
    const rep = replaceInput.value;
    if (!query) return;
    const val = sandboxCodeEditor.value;
    const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    sandboxCodeEditor.value = val.replace(regex, rep);
    saveSandboxHistory();
    updateSandboxHighlight();
    updateFindMatches();
    showEditorToast('تم استبدال كافة التطابقات');
}

if (sandboxFindBtn) sandboxFindBtn.addEventListener('click', openFindWidget);
if (closeFindBtn) closeFindBtn.addEventListener('click', closeFindWidget);
if (findInput) {
    findInput.addEventListener('input', updateFindMatches);
    findInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.shiftKey) findPrev(); else findNext();
        } else if (e.key === 'Escape') {
            closeFindWidget();
        }
    });
}
if (replaceInput) {
    replaceInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            replaceCurrentMatch();
        } else if (e.key === 'Escape') {
            closeFindWidget();
        }
    });
}
if (findNextBtn) findNextBtn.addEventListener('click', findNext);
if (findPrevBtn) findPrevBtn.addEventListener('click', findPrev);
if (replaceOneBtn) replaceOneBtn.addEventListener('click', replaceCurrentMatch);
if (replaceAllBtn) replaceAllBtn.addEventListener('click', replaceAllMatches);

// ربط أزرار شريط الأدوات السريعة
const sandboxUndoBtn = document.getElementById('sandbox-undo-btn');
const sandboxRedoBtn = document.getElementById('sandbox-redo-btn');
const sandboxCommentBtn = document.getElementById('sandbox-comment-btn');
const sandboxDuplicateBtn = document.getElementById('sandbox-duplicate-btn');
const sandboxFormatBtn = document.getElementById('sandbox-format-btn');

if (sandboxUndoBtn) sandboxUndoBtn.addEventListener('click', () => { undoSandbox(); if (sandboxCodeEditor) sandboxCodeEditor.focus(); });
if (sandboxRedoBtn) sandboxRedoBtn.addEventListener('click', () => { redoSandbox(); if (sandboxCodeEditor) sandboxCodeEditor.focus(); });
if (sandboxCommentBtn) sandboxCommentBtn.addEventListener('click', () => { toggleSandboxComment(); if (sandboxCodeEditor) sandboxCodeEditor.focus(); });
if (sandboxDuplicateBtn) sandboxDuplicateBtn.addEventListener('click', () => { duplicateSandboxLine(false); if (sandboxCodeEditor) sandboxCodeEditor.focus(); });
if (sandboxFormatBtn) sandboxFormatBtn.addEventListener('click', () => { formatSandboxCode(); if (sandboxCodeEditor) sandboxCodeEditor.focus(); });

if (sandboxCodeEditor) {
    // كود بايثون الافتراضي لقناة شفرة
    const DEFAULT_SHIFRA_CODE = '# مرحباً بك في محرّر بايثون\nprint("Hello shifra_channel")';
    
    // استعادة الكود المحفوظ مسبقاً إذا وجد، وإلا وضع الكود الافتراضي
    try {
        const savedVal = localStorage.getItem('shefra_sandbox_code');
        if (savedVal && savedVal.trim() && savedVal.includes('shifra_channel')) {
            sandboxCodeEditor.value = savedVal;
        } else {
            sandboxCodeEditor.value = DEFAULT_SHIFRA_CODE;
            localStorage.setItem('shefra_sandbox_code', DEFAULT_SHIFRA_CODE);
        }
    } catch (_) {
        sandboxCodeEditor.value = DEFAULT_SHIFRA_CODE;
    }

    saveSandboxHistory();
    
    sandboxCodeEditor.addEventListener('input', () => {
        saveSandboxHistory();
        updateSandboxHighlight();
    });
    
    sandboxCodeEditor.addEventListener('scroll', () => {
        if (sandboxPre) {
            sandboxPre.scrollTop = sandboxCodeEditor.scrollTop;
            sandboxPre.scrollLeft = sandboxCodeEditor.scrollLeft;
        }
        if (sandboxLineNumbers) {
            sandboxLineNumbers.scrollTop = sandboxCodeEditor.scrollTop;
        }
    });

    sandboxCodeEditor.addEventListener('click', updateCursorStatus);
    sandboxCodeEditor.addEventListener('keyup', updateCursorStatus);
    
    // منظومة اختصارات وميزات المحرر الذكي الكاملة (مبنية وفق معايير VS Code وتعمل مع كافة لغات لوحة المفاتيح)
    sandboxCodeEditor.addEventListener('keydown', (e) => {
        const val = sandboxCodeEditor.value;
        const start = sandboxCodeEditor.selectionStart;
        const end = sandboxCodeEditor.selectionEnd;
        const isCtrlOrCmd = e.ctrlKey || e.metaKey;
        const key = e.key;
        const code = e.code;

        // 1. تهميش / إلغاء تهميش الكود: Ctrl + / (يدعم مفتاح / و مفتاح ظ ومفتاح Numpad مع Shift أو بدونه)
        const isSlashKey = (e.keyCode === 191 || e.which === 191 || code === 'Slash' || code === 'NumpadDivide' || key === '/' || key === 'ظ' || key === '؟' || key === '÷');
        if (isCtrlOrCmd && !e.altKey && isSlashKey) {
            e.preventDefault();
            e.stopPropagation();
            toggleSandboxComment();
            return;
        }

        // 2. تشغيل الكود فوراً: Ctrl + Enter
        if (isCtrlOrCmd && (key === 'Enter' || code === 'Enter' || code === 'NumpadEnter')) {
            e.preventDefault();
            e.stopPropagation();
            if (sandboxRunBtn) sandboxRunBtn.click();
            showEditorToast('⚡ جاري تشغيل الكود... [Ctrl + Enter]', 'fa-play');
            return;
        }

        // 3. حفظ الكود محلياً: Ctrl + S
        if (isCtrlOrCmd && !e.shiftKey && !e.altKey && (code === 'KeyS' || key === 's' || key === 'S' || key === 'س')) {
            e.preventDefault();
            e.stopPropagation();
            localStorage.setItem('shefra_sandbox_code', val);
            showEditorToast('💾 تم حفظ الكود محلياً بنجاح! [Ctrl + S]');
            return;
        }

        // 4. البحث والاستبدال: Ctrl + F
        if (isCtrlOrCmd && !e.shiftKey && !e.altKey && (code === 'KeyF' || key === 'f' || key === 'F' || key === 'ب')) {
            e.preventDefault();
            e.stopPropagation();
            openFindWidget();
            return;
        }

        // 5. تنسيق وترتيب الكود: Shift + Alt + F
        if (e.shiftKey && e.altKey && (code === 'KeyF' || key === 'f' || key === 'F' || key === 'ب')) {
            e.preventDefault();
            e.stopPropagation();
            formatSandboxCode();
            return;
        }

        // 6. فتح دليل الاختصارات والأوامر: F1
        if (key === 'F1') {
            e.preventDefault();
            e.stopPropagation();
            if (sandboxShortcutsBtn) sandboxShortcutsBtn.click();
            return;
        }

        // 7. الانتقال إلى سطر معين: Ctrl + G
        if (isCtrlOrCmd && !e.shiftKey && !e.altKey && (code === 'KeyG' || key === 'g' || key === 'G' || key === 'ل')) {
            e.preventDefault();
            e.stopPropagation();
            const targetLine = prompt('أدخل رقم السطر الذي تريد الانتقال إليه:');
            if (targetLine && !isNaN(targetLine)) {
                goToLine(parseInt(targetLine, 10));
            }
            return;
        }

        // 8. التراجع والتقدم: Ctrl + Z و Ctrl + Y / Ctrl + Shift + Z (يدعم اللغتين الإنجليزية والعربية)
        const isZKey = (code === 'KeyZ' || key === 'z' || key === 'Z' || key === 'ئ');
        const isYKey = (code === 'KeyY' || key === 'y' || key === 'Y' || key === 'غ');
        if (isCtrlOrCmd && !e.shiftKey && isZKey) {
            e.preventDefault();
            e.stopPropagation();
            undoSandbox();
            return;
        }
        if (isCtrlOrCmd && (isYKey || (e.shiftKey && isZKey))) {
            e.preventDefault();
            e.stopPropagation();
            redoSandbox();
            return;
        }

        // 9. تكرار السطر أو التحديد: Shift + Alt + Down/Up أو Alt + Shift + Down/Up أو Ctrl + D
        const isDuplicateKey = (code === 'KeyD' || key === 'd' || key === 'D' || key === 'ي');
        const hasAltAndShift = (e.altKey && e.shiftKey);
        const isDownArrow = (code === 'ArrowDown' || key === 'ArrowDown' || key === 'Down');
        const isUpArrow = (code === 'ArrowUp' || key === 'ArrowUp' || key === 'Up');

        if ((isCtrlOrCmd && isDuplicateKey) || (hasAltAndShift && (isDownArrow || isUpArrow))) {
            e.preventDefault();
            e.stopPropagation();
            const isUp = isUpArrow;
            duplicateSandboxLine(isUp);
            return;
        }

        // 10. تحريك السطر الحالي لأعلى ولأسفل: Alt + ArrowUp / Alt + ArrowDown
        if (e.altKey && !e.shiftKey && !isCtrlOrCmd && (code === 'ArrowUp' || code === 'ArrowDown' || key === 'ArrowUp' || key === 'ArrowDown')) {
            e.preventDefault();
            e.stopPropagation();
            const isUp = (code === 'ArrowUp' || key === 'ArrowUp');
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            const lineEnd = val.indexOf('\n', end);
            const effectiveEnd = lineEnd === -1 ? val.length : lineEnd;
            const currentBlock = val.substring(lineStart, effectiveEnd);

            if (isUp) {
                if (lineStart === 0) return;
                const prevLineStart = val.lastIndexOf('\n', lineStart - 2) + 1;
                const prevLine = val.substring(prevLineStart, lineStart - 1);
                sandboxCodeEditor.value = val.substring(0, prevLineStart) + currentBlock + '\n' + prevLine + val.substring(effectiveEnd);
                const diff = (lineStart - prevLineStart);
                sandboxCodeEditor.selectionStart = start - diff;
                sandboxCodeEditor.selectionEnd = end - diff;
            } else {
                if (effectiveEnd >= val.length) return;
                const nextLineEnd = val.indexOf('\n', effectiveEnd + 1);
                const effectiveNextEnd = nextLineEnd === -1 ? val.length : nextLineEnd;
                const nextLine = val.substring(effectiveEnd + 1, effectiveNextEnd);
                sandboxCodeEditor.value = val.substring(0, lineStart) + nextLine + '\n' + currentBlock + val.substring(effectiveNextEnd);
                const diff = nextLine.length + 1;
                sandboxCodeEditor.selectionStart = start + diff;
                sandboxCodeEditor.selectionEnd = end + diff;
            }
            saveSandboxHistory();
            updateSandboxHighlight();
            return;
        }

        // 11. حذف السطر بالكامل: Ctrl + Shift + K
        if (isCtrlOrCmd && e.shiftKey && (code === 'KeyK' || key === 'k' || key === 'K' || key === 'ن')) {
            e.preventDefault();
            e.stopPropagation();
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            let lineEnd = val.indexOf('\n', end);
            let effectiveEnd = lineEnd === -1 ? val.length : lineEnd + 1;
            if (lineEnd === -1 && lineStart > 0) {
                sandboxCodeEditor.value = val.substring(0, lineStart - 1);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = Math.max(0, lineStart - 1);
            } else {
                sandboxCodeEditor.value = val.substring(0, lineStart) + val.substring(effectiveEnd);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = lineStart;
            }
            saveSandboxHistory(true);
            updateSandboxHighlight();
            showEditorToast('تم حذف السطر [Ctrl + Shift + K]', 'fa-trash-can');
            return;
        }

        // 12. مفتاح Enter: مسافة بادئة ذكية تلقائية وكسر الأقواس
        if (key === 'Enter') {
            e.preventDefault();
            
            const prevChar = start > 0 ? val.charAt(start - 1) : '';
            const nextChar = val.charAt(start);
            const isPairSplit = (prevChar === '{' && nextChar === '}') ||
                                (prevChar === '(' && nextChar === ')') ||
                                (prevChar === '[' && nextChar === ']');

            const lastNewline = val.lastIndexOf('\n', start - 1);
            const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
            const currentLine = val.substring(lineStart, start);
            const match = currentLine.match(/^\s*/);
            let indent = match ? match[0] : '';

            if (isPairSplit) {
                const insertText = '\n' + indent + '    \n' + indent;
                sandboxCodeEditor.value = val.substring(0, start) + insertText + val.substring(end);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = start + 1 + indent.length + 4;
            } else {
                const trimmed = currentLine.trim();
                if (trimmed.endsWith(':')) {
                    indent += '    ';
                }
                const insertText = '\n' + indent;
                sandboxCodeEditor.value = val.substring(0, start) + insertText + val.substring(end);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = start + insertText.length;
            }
            saveSandboxHistory();
            updateSandboxHighlight();
            return;
        }

        // 13. مفتاح Tab: إضافة 4 مسافات مسافة بادئة
        if (key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            if (start === end) {
                sandboxCodeEditor.value = val.substring(0, start) + '    ' + val.substring(end);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = start + 4;
            } else {
                const lineStart = val.lastIndexOf('\n', start - 1) + 1;
                const lineEnd = val.indexOf('\n', end);
                const effectiveEnd = lineEnd === -1 ? val.length : lineEnd;
                const lines = val.substring(lineStart, effectiveEnd).split('\n');
                const indented = lines.map(l => '    ' + l).join('\n');
                sandboxCodeEditor.value = val.substring(0, lineStart) + indented + val.substring(effectiveEnd);
                sandboxCodeEditor.selectionStart = lineStart;
                sandboxCodeEditor.selectionEnd = lineStart + indented.length;
            }
            saveSandboxHistory();
            updateSandboxHighlight();
            return;
        }

        // 14. مفتاح Shift + Tab: تقليص المسافة البادئة 4 مسافات
        if (key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            const lineStart = val.lastIndexOf('\n', start - 1) + 1;
            const lineEnd = val.indexOf('\n', end);
            const effectiveEnd = lineEnd === -1 ? val.length : lineEnd;
            const lines = val.substring(lineStart, effectiveEnd).split('\n');
            const unindented = lines.map(l => l.replace(/^ {1,4}/, '')).join('\n');
            sandboxCodeEditor.value = val.substring(0, lineStart) + unindented + val.substring(effectiveEnd);
            sandboxCodeEditor.selectionStart = lineStart;
            sandboxCodeEditor.selectionEnd = lineStart + unindented.length;
            saveSandboxHistory();
            updateSandboxHighlight();
            return;
        }

        // 15. مفتاح Backspace: حذف ذكي لزوج الأقواس أو علامات التنصيص معاً أو 4 مسافات
        if (key === 'Backspace' && start === end && start > 0) {
            const prev = val.charAt(start - 1);
            const next = val.charAt(start);
            if ((prev === '"' && next === '"') ||
                (prev === "'" && next === "'") ||
                (prev === '(' && next === ')') ||
                (prev === '[' && next === ']') ||
                (prev === '{' && next === '}')) {
                e.preventDefault();
                sandboxCodeEditor.value = val.substring(0, start - 1) + val.substring(start + 1);
                sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = start - 1;
                saveSandboxHistory();
                updateSandboxHighlight();
                return;
            }

            if (start >= 4) {
                const lastNewline = val.lastIndexOf('\n', start - 1);
                const col = start - (lastNewline === -1 ? 0 : lastNewline + 1);
                const precedingFour = val.substring(start - 4, start);
                if (precedingFour === '    ' && (col % 4 === 0)) {
                    e.preventDefault();
                    sandboxCodeEditor.value = val.substring(0, start - 4) + val.substring(end);
                    sandboxCodeEditor.selectionStart = sandboxCodeEditor.selectionEnd = start - 4;
                    saveSandboxHistory();
                    updateSandboxHighlight();
                    return;
                }
            }
        }

        // 16. إغلاق وتخطي وتغليف تلقائي للأقواس وعلامات التنصيص
        const openPairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
        const closeChars = [')', ']', '}', '"', "'"];

        if (closeChars.includes(key) && start === end && val.charAt(start) === key) {
            e.preventDefault();
            e.stopPropagation();
            sandboxCodeEditor.setSelectionRange(start + 1, start + 1);
            return;
        }

        if (openPairs[key]) {
            e.preventDefault();
            e.stopPropagation();
            const closeChar = openPairs[key];
            if (start !== end) {
                const selectedText = val.substring(start, end);
                sandboxCodeEditor.value = val.substring(0, start) + key + selectedText + closeChar + val.substring(end);
                sandboxCodeEditor.setSelectionRange(start + 1, end + 1);
            } else {
                sandboxCodeEditor.value = val.substring(0, start) + key + closeChar + val.substring(end);
                sandboxCodeEditor.setSelectionRange(start + 1, start + 1);
            }
            saveSandboxHistory(true);
            updateSandboxHighlight();
            return;
        }
    });

    // الاستماع العام للاختصارات على مستوى النافذة (Global Window Listener) لتعمل الاختصارات من أي موضع
    window.addEventListener('keydown', (e) => {
        if (sandboxModal && sandboxModal.classList.contains('show')) {
            // إذا كان التركيز داخل المحرر نفسه، نتركه يعالج الحدث لمنع التكرار المضاعف
            if (e.target === sandboxCodeEditor) return;

            const isCtrlOrCmd = e.ctrlKey || e.metaKey;
            const key = e.key;
            const code = e.code;

            // تشغيل الكود: Ctrl + Enter
            if (isCtrlOrCmd && (key === 'Enter' || code === 'Enter' || code === 'NumpadEnter')) {
                e.preventDefault();
                if (sandboxRunBtn) sandboxRunBtn.click();
                showEditorToast('⚡ جاري تشغيل الكود... [Ctrl + Enter]', 'fa-play');
                return;
            }

            // حفظ الكود: Ctrl + S
            if (isCtrlOrCmd && !e.shiftKey && !e.altKey && (code === 'KeyS' || key === 's' || key === 'S' || key === 'س')) {
                e.preventDefault();
                localStorage.setItem('shefra_sandbox_code', sandboxCodeEditor.value);
                showEditorToast('💾 تم حفظ الكود محلياً بنجاح [Ctrl + S]');
                return;
            }

            // البحث: Ctrl + F
            if (isCtrlOrCmd && !e.shiftKey && !e.altKey && (code === 'KeyF' || key === 'f' || key === 'F' || key === 'ب')) {
                e.preventDefault();
                openFindWidget();
                return;
            }

            // التنسيق: Shift + Alt + F
            if (e.shiftKey && e.altKey && (code === 'KeyF' || key === 'f' || key === 'F' || key === 'ب')) {
                e.preventDefault();
                formatSandboxCode();
                return;
            }

            // تهميش / إلغاء التهميش: Ctrl + / (ويدعم لوحة المفاتيح العربية والإنجليزية)
            const isSlashKey = (e.keyCode === 191 || e.which === 191 || code === 'Slash' || code === 'NumpadDivide' || key === '/' || key === 'ظ' || key === '؟' || key === '÷');
            if (isCtrlOrCmd && !e.altKey && isSlashKey) {
                e.preventDefault();
                toggleSandboxComment();
                return;
            }

            // تكرار السطر: Shift + Alt + Down/Up أو Alt + Shift + Down/Up أو Ctrl + D
            const isDuplicateKey = (code === 'KeyD' || key === 'd' || key === 'D' || key === 'ي');
            const hasAltAndShift = (e.altKey && e.shiftKey);
            const isDownArrow = (code === 'ArrowDown' || key === 'ArrowDown' || key === 'Down');
            const isUpArrow = (code === 'ArrowUp' || key === 'ArrowUp' || key === 'Up');

            if ((isCtrlOrCmd && isDuplicateKey) || (hasAltAndShift && (isDownArrow || isUpArrow))) {
                e.preventDefault();
                const isUp = isUpArrow;
                duplicateSandboxLine(isUp);
                return;
            }

            // التراجع والتقدم: Ctrl + Z / Ctrl + Y
            const isZKey = (code === 'KeyZ' || key === 'z' || key === 'Z' || key === 'ئ');
            const isYKey = (code === 'KeyY' || key === 'y' || key === 'Y' || key === 'غ');
            if (isCtrlOrCmd && !e.shiftKey && isZKey && e.target !== sandboxCodeEditor) {
                e.preventDefault();
                undoSandbox();
                return;
            }
            if (isCtrlOrCmd && (isYKey || (e.shiftKey && isZKey)) && e.target !== sandboxCodeEditor) {
                e.preventDefault();
                redoSandbox();
                return;
            }

            // دليل الاختصارات: F1
            if (key === 'F1') {
                e.preventDefault();
                if (sandboxShortcutsModal) sandboxShortcutsModal.classList.toggle('show');
                return;
            }

            // إغلاق بـ Esc
            if (key === 'Escape') {
                if (sandboxShortcutsModal && sandboxShortcutsModal.classList.contains('show')) {
                    sandboxShortcutsModal.classList.remove('show');
                    return;
                }
                if (sandboxFindWidget && !sandboxFindWidget.classList.contains('hidden')) {
                    closeFindWidget();
                    return;
                }
            }
        }
    });
}

// تهيئة محرر CodeMirror الاحترافي لموقع شيفرة
let sandboxCM = null;

function initSandboxCodeMirror() {
    if (sandboxCM || !window.CodeMirror) return;
    const textarea = document.getElementById('sandbox-code-editor');
    const container = document.querySelector('.sandbox-editor-container');
    if (!textarea || !container) return;

    container.classList.add('has-codemirror');

    sandboxCM = CodeMirror.fromTextArea(textarea, {
        mode: 'python',
        theme: 'material-darker',
        lineNumbers: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: false,
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Ctrl-Enter": () => {
                if (sandboxRunBtn) sandboxRunBtn.click();
            },
            "Cmd-Enter": () => {
                if (sandboxRunBtn) sandboxRunBtn.click();
            },
            "Tab": (cm) => {
                if (cm.somethingSelected()) {
                    cm.indentSelection("add");
                } else {
                    cm.replaceSelection("    ", "end");
                }
            }
        }
    });

    window.sandboxCM = sandboxCM;
    sandboxCM.setSize("100%", "100%");

    sandboxCM.on('change', () => {
        sandboxCM.save();
        updateCursorStatus();
        if (typeof runPythonDiagnostics === 'function') runPythonDiagnostics();
    });

    sandboxCM.on('cursorActivity', () => {
        updateCursorStatus();
    });
}

function openSandboxModal() {
    if (sandboxModal) {
        sandboxModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        ensureSkulptLoaded().catch(() => {});
        initSandboxCodeMirror();
        updateSandboxHighlight();
        
        setTimeout(() => {
            if (sandboxCM) {
                sandboxCM.refresh();
                sandboxCM.focus();
            } else if (sandboxCodeEditor) {
                sandboxCodeEditor.focus();
            }
            updateCursorStatus();
        }, 70);
    }
}

function closeSandboxModal() {
    if (sandboxModal) {
        sandboxModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

if (openSandboxHeroBtn) openSandboxHeroBtn.addEventListener('click', openSandboxModal);
if (navSandboxLink) navSandboxLink.addEventListener('click', (e) => { e.preventDefault(); openSandboxModal(); });
const headerCodeEditorBtn = document.getElementById('header-code-editor-btn');
if (headerCodeEditorBtn) headerCodeEditorBtn.addEventListener('click', (e) => { e.preventDefault(); openSandboxModal(); });
const mobileCodeBtn = document.getElementById('mobile-code-btn');
if (mobileCodeBtn) mobileCodeBtn.addEventListener('click', (e) => { e.preventDefault(); openSandboxModal(); });
if (closeSandboxModalBtn) closeSandboxModalBtn.addEventListener('click', closeSandboxModal);
if (sandboxBackBtn) sandboxBackBtn.addEventListener('click', closeSandboxModal);

// التحكم في تبويبات الهاتف لمحرر الأكواد والشاشة الطرفية
const tabBtnEditor = document.getElementById('tab-btn-editor');
const tabBtnOutput = document.getElementById('tab-btn-output');
const sandboxEditorPanel = document.getElementById('sandbox-editor-panel');
const sandboxOutputPanel = document.getElementById('sandbox-output-panel');

function switchMobileTab(tabName) {
    if (tabName === 'output') {
        if (tabBtnOutput) tabBtnOutput.classList.add('active');
        if (tabBtnEditor) tabBtnEditor.classList.remove('active');
        if (sandboxOutputPanel) sandboxOutputPanel.classList.add('active-mobile-panel');
        if (sandboxEditorPanel) sandboxEditorPanel.classList.remove('active-mobile-panel');
    } else {
        if (tabBtnEditor) tabBtnEditor.classList.add('active');
        if (tabBtnOutput) tabBtnOutput.classList.remove('active');
        if (sandboxEditorPanel) sandboxEditorPanel.classList.add('active-mobile-panel');
        if (sandboxOutputPanel) sandboxOutputPanel.classList.remove('active-mobile-panel');
        if (sandboxCM) {
            sandboxCM.refresh();
            sandboxCM.focus();
        } else if (sandboxCodeEditor) {
            sandboxCodeEditor.focus();
        }
    }
}

if (tabBtnEditor) tabBtnEditor.addEventListener('click', () => switchMobileTab('editor'));
if (tabBtnOutput) tabBtnOutput.addEventListener('click', () => switchMobileTab('output'));

// Initial highlight on load
updateSandboxHighlight();

if (clearSandboxOutputBtn && sandboxTerminalOutput) {
    clearSandboxOutputBtn.addEventListener('click', () => {
        sandboxTerminalOutput.innerHTML = '<span class="term-placeholder">تم مسح المخرجات. اضغط على تشغيل الكود للبدء من جديد...</span>';
        if (sandboxExecTime) sandboxExecTime.classList.add('hidden');
    });
}

if (sandboxClearBtn && sandboxCodeEditor) {
    sandboxClearBtn.addEventListener('click', () => {
        if (sandboxCM) {
            sandboxCM.setValue('');
            sandboxCM.focus();
        } else {
            sandboxCodeEditor.value = '';
        }
        updateSandboxHighlight();
    });
}

if (sandboxCopyBtn && sandboxCodeEditor) {
    sandboxCopyBtn.addEventListener('click', () => {
        const code = sandboxCM ? sandboxCM.getValue() : (sandboxCodeEditor.value || '');
        navigator.clipboard.writeText(code).then(() => {
            const orig = sandboxCopyBtn.innerHTML;
            sandboxCopyBtn.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ!';
            setTimeout(() => sandboxCopyBtn.innerHTML = orig, 2000);
        });
    });
}

if (sandboxDownloadBtn && sandboxCodeEditor) {
    sandboxDownloadBtn.addEventListener('click', () => {
        const code = sandboxCM ? sandboxCM.getValue() : (sandboxCodeEditor.value || '');
        const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'main.py';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

// تشغيل الكود في مختبر بايثون
if (sandboxRunBtn && sandboxCodeEditor && sandboxTerminalOutput) {
    sandboxRunBtn.addEventListener('click', async () => {
        const code = sandboxCM ? sandboxCM.getValue() : (sandboxCodeEditor.value || '');
        if (!code.trim()) return;

        if (window.innerWidth <= 768 && typeof switchMobileTab === 'function') {
            switchMobileTab('output');
        }

        sandboxTerminalOutput.innerHTML = '<span class="term-info">⚡ جاري تشغيل الكود عبر محرك بايثون...</span>';
        if (sandboxExecTime) sandboxExecTime.classList.add('hidden');

        const origHtml = sandboxRunBtn.innerHTML;
        sandboxRunBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التشغيل...';

        try {
            await runPythonSmart(code, sandboxTerminalOutput, sandboxExecTime, sandboxRunBtn, origHtml);
        } catch (err) {
            const errSpan = document.createElement('span');
            errSpan.className = 'term-error';
            errSpan.textContent = `❌ ${err.toString()}`;
            sandboxTerminalOutput.appendChild(errSpan);
        } finally {
            sandboxRunBtn.innerHTML = origHtml;
        }
    });
}

// Download Infographic Image
if (downloadInfographicBtn) {
    downloadInfographicBtn.addEventListener('click', async () => {
        // Check IndexedDB or localStorage first
        const localDataUrl = (await getInfographicFromDB(currentLessonId)) || localStorage.getItem(`cipher_infographic_${currentLessonId}`);
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
            // Prefer lightweight WebP (280KB) or fallback to PNG (2.4MB)
            let response = await fetch(`infographics/${currentLessonId}.webp?t=` + Date.now());
            let fileExt = 'webp';
            if (!response.ok) {
                response = await fetch(currentLessonInfographic + '?t=' + Date.now());
                fileExt = 'png';
            }
            if (!response.ok) {
                alert('لم يتم رفع ورقة إنفوجراف لهذه الحلقة بعد.');
                return;
            }
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `shefra-lesson-${currentLessonId}-infographic.${fileExt}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            alert('لم يتم رفع ورقة إنفوجراف لهذه الحلقة بعد.');
        }
    });
}

// Ghost Pre-buffering YouTube Player (Zero-Latency Instant Start)
const heroLitePlayer = document.getElementById('hero-lite-player');
if (heroLitePlayer) {
    const videoId = heroLitePlayer.getAttribute('data-video-id') || 'yPfdOEcOVS4';
    let ghostIframe = null;
    let isGhostLoaded = false;

    // Silent background pre-buffering while visitor reads the title & intro
    const initGhostIframe = () => {
        if (ghostIframe) return;
        ghostIframe = document.createElement('iframe');
        ghostIframe.className = 'ghost-iframe';
        ghostIframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0`);
        ghostIframe.setAttribute('title', 'شيفرة - تعلم لغة بايثون');
        ghostIframe.setAttribute('frameborder', '0');
        ghostIframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        ghostIframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        ghostIframe.setAttribute('allowfullscreen', 'true');
        ghostIframe.onload = () => {
            isGhostLoaded = true;
        };
        heroLitePlayer.appendChild(ghostIframe);
    };

    // Start silent pre-buffering 600ms after initial render
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(initGhostIframe, 600));
    } else {
        setTimeout(initGhostIframe, 800);
    }

    // Also trigger immediately if user moves mouse near the video area before timer
    heroLitePlayer.addEventListener('pointerenter', initGhostIframe, { once: true });
    heroLitePlayer.addEventListener('touchstart', initGhostIframe, { once: true, passive: true });

    heroLitePlayer.addEventListener('click', () => {
        heroLitePlayer.classList.add('is-active');

        if (typeof window.trackCampaignEvent === 'function') {
            window.trackCampaignEvent('play_hero_video', { video_id: videoId });
        }

        if (ghostIframe && isGhostLoaded) {
            // Instant zero-delay start via postMessage API
            try {
                ghostIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            } catch (e) {}
        } else if (ghostIframe) {
            // If still loading, force autoplay URL
            ghostIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`;
        } else {
            // Fallback
            initGhostIframe();
            ghostIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`;
        }
    });

    // Predictive Pre-warm Lesson 1 during idle time (the most visited lesson)
    setTimeout(() => {
        const lesson1 = lessons.find(l => l.id === 1);
        if (lesson1) {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = `https://www.youtube.com/embed/${lesson1.videoId}`;
            document.head.appendChild(link);
        }
    }, 2000);
}
