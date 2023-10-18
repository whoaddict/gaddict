        var donations = [
           { name: "คุณ ผู้ไม่ประสงค์ออกนาม", item: "ส่อง 21 อัน", date: "2023-7-9" },
          { name: "คุณ จั๊กแหลน", item: "ส่อง 1 อัน", date: "2023-7-15" },
    { name: "Admin Official Zone4", item: "ส่อง 5 อัน", date: "2023-7-15" },
    { name: "คุณ X2BIT", item: "LIFE /Potion / Arcade Coupon", date: "2023-07-20" },
    { name: "ทีมงาน ZONE4", item: "ส่อง 100 อัน /Premium Shop 30 วัน", date: "2023-07-25" },
    { name: "คุณ SUNPOP", item: "ส่อง 10 อัน", date: "2023-07-25" }
        ];

        // เลือกตาราง
        var table = document.getElementById("donationTable");

    
        for (var i = 0; i < donations.length; i++) {
            var donation = donations[i];
            var row = table.insertRow(i + 1); 

            var nameCell = row.insertCell(0);
            var itemCell = row.insertCell(1);
            var dateCell = row.insertCell(2);

            nameCell.innerHTML = donation.name;
            itemCell.innerHTML = donation.item;
            dateCell.innerHTML = donation.date;
        }
