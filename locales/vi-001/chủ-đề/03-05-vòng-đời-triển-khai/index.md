# Chủ đề 3.5 — Vòng đời triển khai

**Tóm lại trong một câu:** [Vòng đời triển khai](https://en.wikipedia.org/wiki/Systems_development_life_cycle) là chuỗi các giai đoạn và cổng quyết định — Khám phá, Alpha, Beta, Vận hành (Live), và cuối cùng là cho nghỉ hưu — mà qua đó một dịch vụ số di chuyển, với an toàn lâm sàng, quản trị thông tin và đảm bảo được dệt vào mọi giai đoạn thay vì gắn thêm ở cuối.

## Vì sao điều này quan trọng trong y tế và chăm sóc

Một vòng đời là cách một tổ chức chuyển một ý tưởng thành một dịch vụ vận hành an toàn và, cuối cùng, cho nó nghỉ hưu một cách có trách nhiệm. Trong y tế và chăm sóc, mỗi chuyển tiếp mang sức nặng luật định và lâm sàng: bạn không thể triển khai một hệ thống chạm đến việc chăm sóc bệnh nhân mà thiếu hồ sơ an toàn lâm sàng, và bạn không thể xử lý dữ liệu bệnh nhân bí mật mà thiếu cơ sở pháp lý và một [đánh giá tác động bảo vệ dữ liệu](https://en.wikipedia.org/wiki/Privacy_impact_assessment) (DPIA) đã hoàn tất. Một vòng đời xem những thứ này là giấy tờ cuối dự án sẽ tạo ra các dịch vụ trễ, không an toàn, hoặc cả hai.

Rủi ro mang tính bất đối xứng. Một ứng dụng tiêu dùng giao một lỗi làm phiền người dùng; một hồ sơ chăm sóc dùng chung giao một lỗi có thể cho bác sĩ thấy dị ứng của sai bệnh nhân. Đó là lý do NHS nhúng mô hình giai đoạn GOV.UK *và* các tiêu chuẩn quản lý rủi ro lâm sàng DCB0129 và DCB0160 vào cùng một vòng đời. Làm đúng vòng đời không phải sự tế nhị về quản trị — đó là cơ chế qua đó an toàn, công bằng và giá trị đồng tiền công được thực sự mang lại thay vì chỉ được hứa.

Các nhà lãnh đạo cũng cần vòng đời vì nó làm cho tiến độ *dễ đọc*. Các giai đoạn và cổng có tên cho phép hội đồng thấy một dịch vụ đang ở đâu, có bằng chứng gì, và quyết định nào đến hạn — thay thế màn sương "nó gần xong rồi" bằng một cam kết tiền công theo giai đoạn, bảo vệ được.

## Các khái niệm cốt lõi

**Mô hình giai đoạn: Khám phá → Alpha → Beta → Vận hành.** Các tiêu chuẩn dịch vụ NHS và GOV.UK xác định bốn giai đoạn. **Khám phá** (xem Chủ đề 3.4 — Giai đoạn khám phá) hiểu vấn đề. **Alpha** xây các [nguyên mẫu dùng-một-lần](https://en.wikipedia.org/wiki/Software_prototyping) để kiểm thử liệu một giải pháp *có thể* hoạt động và giảm dần các giả định rủi ro nhất. **Beta** xây dịch vụ thật, riêng tư rồi công khai trên hạ tầng sản phẩm, lặp lại với người dùng thật ở quy mô tăng dần. **Vận hành** chạy dịch vụ liên tục, vẫn lặp lại, cho đến khi nó nghỉ hưu. Các giai đoạn là một dốc giảm rủi ro: mỗi giai đoạn cam kết nhiều tiền hơn và phơi bày nhiều người dùng hơn, được biện minh bằng bằng chứng từ giai đoạn trước.

**Lặp liên tục, không phải băng chuyền.** Các giai đoạn không phải là một thác nước một chiều. Một dịch vụ trong beta có thể quay lại alpha cho một tính năng khó; một dịch vụ vận hành lặp lại liên tục. Giá trị của mô hình nằm ở các *cổng* của nó, không phải lời hứa rằng công việc chảy theo một hướng.

**Agile, thác nước và lai.** *[Thác nước (Waterfall)](https://en.wikipedia.org/wiki/Waterfall_model)* cố định phạm vi từ đầu và tiến theo tuần tự — chỉ phù hợp khi yêu cầu thực sự ổn định và biết được (một cuộc di chuyển trung tâm dữ liệu, một thay đổi quy định bắt buộc). *[Agile](https://en.wikipedia.org/wiki/Agile_software_development)* giao theo các gia số nhỏ, kiểm tra và thích ứng — phù hợp với sự bất định của các dịch vụ hướng tới người dùng. *Lai* là thực tế trung thực của hầu hết các chương trình y tế lớn: các nhóm sản phẩm agile hoạt động bên trong một lớp bọc cột mốc và kinh phí mà tổ chức và cơ quan quản lý của nó yêu cầu. Hãy khớp phương pháp với sự bất định, không phải với mốt.

**Đánh giá dịch vụ và các cổng tiêu chuẩn.** Ở các chuyển tiếp giữa các giai đoạn — đặc biệt từ alpha sang beta và trước khi ra mắt công khai — các dịch vụ NHS và GOV.UK đối mặt với một **đánh giá dịch vụ**: một hội đồng độc lập kiểm tra công việc theo các điểm của Tiêu chuẩn Dịch vụ (nhu cầu người dùng, khả năng tiếp cận, bảo mật, độ tin cậy, nhóm, lựa chọn công nghệ). Vượt qua là cổng để chi nhiều hơn và phơi bày nhiều người dùng hơn. Đánh giá là rà soát đồng đẳng dựa trên bằng chứng, không phải con dấu cao su.

**An toàn lâm sàng và quản trị thông tin như các sợi chỉ của vòng đời.** DCB0129 (cho nhà sản xuất/nhà cung cấp) và DCB0160 (cho tổ chức y tế hoặc chăm sóc triển khai) yêu cầu một hệ thống quản lý rủi ro lâm sàng, một **nhật ký mối nguy**, và một **báo cáo hồ sơ an toàn lâm sàng** được một Cán bộ An toàn Lâm sàng (CSO) có tên, được đào tạo phê duyệt. Quản trị thông tin yêu cầu một cơ sở pháp lý, một DPIA, và tuân thủ các nguyên tắc Caldicott. Cả hai đều là các *sợi chỉ* chạy xuyên qua khám phá, alpha, beta và vận hành — không phải các cổng ở cuối.

**Cho nghỉ hưu (decommissioning).** Một vòng đời có điểm kết thúc. Cho một dịch vụ nghỉ hưu an toàn — di chuyển hoặc lưu trữ dữ liệu theo luật lưu giữ, chuyển hướng người dùng, thông báo cho bác sĩ, và bảo tồn hồ sơ — tự nó là một giai đoạn, và là một trong những giai đoạn bị bỏ bê nhất.

## Thực hành tốt nhất

1. **Dùng các giai đoạn như cổng giảm rủi ro, không phải cột mốc lịch.** Để quyết định của mỗi giai đoạn là "có đủ bằng chứng để biện minh cho việc cam kết đợt tiền và người dùng tiếp theo không?" Một giai đoạn kết thúc vì ngày đã đến, chứ không phải vì bằng chứng đã có, đã bỏ qua điểm của cổng.

2. **Dệt an toàn lâm sàng vào từ alpha, không phải trước Vận hành.** Bổ nhiệm một Cán bộ An toàn Lâm sàng và mở nhật ký mối nguy ngay khi hình dạng giải pháp xuất hiện. Các mối nguy được xác định trong alpha rẻ để thiết kế loại bỏ; các mối nguy phát hiện lúc vận hành là một cuộc khủng hoảng chặn ra mắt. Hồ sơ an toàn trưởng thành cùng dịch vụ, nên phê duyệt DCB0129/0160 là bản tóm tắt công việc đã làm, không phải một cuộc chạy đua.

3. **Bắt đầu DPIA và công việc quản trị thông tin trong khám phá và giữ nó sống.** Luồng dữ liệu, cơ sở pháp lý và các cân nhắc Caldicott định hình kiến trúc, vì vậy hãy làm chúng lộ ra khi kiến trúc còn mềm. Một DPIA viết sau khi xây là một bài tập ghi chép; một DPIA viết cùng thiết kế thực sự giảm rủi ro và ngăn việc làm lại.

4. **Tự động hóa con đường đến sản phẩm bằng [CI/CD](https://en.wikipedia.org/wiki/CI/CD) và [DevOps](https://en.wikipedia.org/wiki/DevOps).** [Tích hợp liên tục](https://en.wikipedia.org/wiki/Continuous_integration) và [giao hàng liên tục](https://en.wikipedia.org/wiki/Continuous_delivery) — các đường ống xây dựng, kiểm thử và triển khai tự động — cho phép một nhóm giao các thay đổi nhỏ, có thể đảo ngược một cách an toàn và thường xuyên. Trong một lĩnh vực an toàn then chốt, khả năng triển khai một bản sửa trong vài phút và quay lui sạch sẽ tự nó là một biện pháp kiểm soát an toàn. Ghép nó với giám sát, cảnh báo và [hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code) để dịch vụ đang chạy có thể [quan sát](https://en.wikipedia.org/wiki/Observability_(software)) và tái lập được.

5. **Khớp phương pháp với sự bất định.** Dùng agile nơi nhu cầu người dùng còn bất định và khám phá vẫn đang dạy bạn điều mới; chấp nhận trình tự kiểu thác nước chỉ nơi yêu cầu thực sự cố định và rủi ro thay đổi thấp. Hãy rõ ràng về việc chạy một mô hình lai — các nhóm agile bên trong lớp bọc chương trình — thay vì giả vờ một phương pháp chi phối mọi thứ, điều lừa được không ai và làm bực mọi người.

6. **Xem đánh giá dịch vụ như một công cụ thiết kế, không phải một kỳ thi.** Mời những người rà soát đảm bảo, an toàn lâm sàng, bảo mật và khả năng tiếp cận vào *sớm* và thường xuyên, để đánh giá chính thức xác nhận một dịch vụ đã được xây theo chuẩn. Các nhóm lần đầu gặp chuẩn vào tuần trước đánh giá thất bại chậm và tốn kém; các nhóm nội tâm hóa nó vượt qua như một sản phẩm phụ.

7. **Tiếp tục lặp trong Vận hành — và cấp nguồn lực cho nó.** Một dịch vụ không ngừng cần một nhóm khi nó vận hành. Vận hành là nơi việc sử dụng thực làm lộ ra những bất bình đẳng cuối cùng, các ca biên lâm sàng hiếm nhưng nghiêm trọng, và các khoảng trống về khả năng tiếp cận. Hãy tài trợ một nhóm sản phẩm thường trực cho vòng đời vận hành của dịch vụ (xem Chủ đề 5.0 — Công việc dẫn dắt bởi sản phẩm); một dịch vụ vận hành không có nhóm là nợ kỹ thuật đang tích lũy rủi ro lâm sàng.

8. **Lên kế hoạch cho nghỉ hưu trước khi bạn cần.** Quyết định, trong khi xây dựng, dịch vụ sẽ cuối cùng được cho nghỉ hưu như thế nào: lưu giữ và di chuyển dữ liệu theo luật quản lý hồ sơ, chuyển hướng người dùng, thông báo bác sĩ, và lưu trữ hồ sơ an toàn lâm sàng và dấu vết kiểm toán. Một sự nghỉ hưu không có kế hoạch để lại dữ liệu và người dùng bị bỏ rơi; một sự nghỉ hưu có kế hoạch là một giai đoạn được kiểm soát, có thể kiểm toán.

## Câu hỏi để thảo luận với nhóm của bạn

1. **Các cổng giai đoạn của chúng ta thực sự được chi phối bởi bằng chứng, hay chúng đã lặng lẽ trở thành các ngày tháng trên một kế hoạch?**
   Toàn bộ giá trị của mô hình Khám phá–Alpha–Beta–Vận hành là mỗi chuyển tiếp chỉ cam kết nhiều tiền hơn và phơi bày nhiều người dùng hơn khi bằng chứng từ giai đoạn trước biện minh cho nó; khoảnh khắc một cổng bật vì quý đã kết thúc chứ không phải vì bằng chứng đã có, dốc ngừng giảm rủi ro và trở thành "thác nước khoác áo agile". Câu hỏi này yêu cầu một nhóm nhìn thẳng vào vài chuyển tiếp gần nhất của mình và hỏi điều gì sẽ xảy ra nếu bằng chứng nói "chưa" — có chỗ để giữ lại, quay một beta về alpha cho một tính năng khó, hay ngày vận hành là bất khả di dời về mặt chính trị? Căng thẳng cần tranh luận là giữa nhu cầu của tổ chức về các cột mốc dễ đọc, theo lịch hội đồng và thực tế rằng các dịch vụ an toàn di chuyển theo nhịp của bằng chứng, và triển khai lai nằm chính trong ma sát đó. Các góc cụ thể gồm gọi tên quyết định và bằng chứng cụ thể đến hạn ở cổng tiếp theo, kiểm tra xem các "sprint" có thực sự thay đổi phạm vi hay chỉ theo dõi một kế hoạch cố định, và hỏi ai được trao quyền hoãn một cổng mà không rủi ro sự nghiệp. Một câu trả lời tốt có thể chỉ ra một trường hợp thực khi bằng chứng đã thay đổi kế hoạch, và có thể diễn đạt bằng chứng nào sẽ biện minh — hoặc chặn — cam kết tiền công và người dùng tiếp theo.

2. **An toàn lâm sàng và quản trị thông tin có là các sợi chỉ sống xuyên mọi giai đoạn, hay là giấy tờ chúng ta định hoàn thành trước Vận hành?**
   Trong y tế và chăm sóc, DPIA và công việc rủi ro lâm sàng DCB0129/0160 không phải phê duyệt cuối dự án mà là các sợi chỉ phải định hình kiến trúc và thiết kế từ alpha trở đi, vì một mối nguy được thiết kế loại bỏ sớm thì rẻ trong khi một mối nguy phát hiện lúc vận hành là cuộc khủng hoảng chặn ra mắt — hoặc tệ hơn, áp lực cho qua hồ sơ an toàn. Câu hỏi này làm lộ ra liệu một Cán bộ An toàn Lâm sàng có tên, được đào tạo và một nhật ký mối nguy đang mở có tồn tại ngay khi một hình dạng giải pháp xuất hiện không, và liệu DPIA cùng phân tích cơ sở pháp lý đã bắt đầu trong khám phá khi các luồng dữ liệu còn đủ mềm để thay đổi chưa. Sự đánh đổi đáng tranh luận là cảm giác nặng nề của việc làm điều này liên tục so với cái giá và rủi ro lâm sàng lớn hơn nhiều của việc cải tạo hồi tố, đặc biệt với các nhóm nhỏ hay công ty khởi nghiệp nơi chưa có cơ quan quản lý nào dõi theo nhưng nghĩa vụ DCB0129 gắn với nhà sản xuất bất kể. Hãy xem xét bằng chứng cụ thể: nhật ký mối nguy có cho thấy các mối nguy được tìm ra và giảm thiểu trong alpha không, hồ sơ an toàn có đọc như bản tóm tắt công việc đã làm không, và DPIA có truy về các quyết định thiết kế thực không? Một câu trả lời trung thực phân biệt một nhóm làm trưởng thành hồ sơ an toàn của mình cùng dịch vụ với một nhóm đang hướng đến một cuộc chạy đua tài liệu vào tháng trước khi ra mắt.

3. **Dịch vụ này sẽ được vận hành trong Vận hành và cuối cùng được cho nghỉ hưu như thế nào — và ai được tài trợ để làm điều đó?**
   Các vòng đời có một cái đuôi dài mà các tổ chức thường xuyên thiếu kinh phí: Vận hành là nơi việc sử dụng thực làm lộ ra những bất bình đẳng cuối cùng, các ca biên lâm sàng hiếm nhưng nghiêm trọng và khoảng trống khả năng tiếp cận, và nó cần một nhóm sản phẩm thường trực, giám sát và triển khai nhanh, có thể đảo ngược, chứ không phải một nhóm giải tán lúc vận hành để mặc dịch vụ mục nát và lặng lẽ tích lũy rủi ro lâm sàng. Cũng bị bỏ bê không kém là cho nghỉ hưu — cho một dịch vụ nghỉ hưu theo luật lưu giữ hồ sơ, di chuyển hoặc lưu trữ dữ liệu, chuyển hướng người dùng, thông báo cho bác sĩ, và bảo tồn nhật ký mối nguy cùng dấu vết kiểm toán — đối với một hệ thống quốc gia là một chương trình lớn tự nó, không phải điều nghĩ sau khi sản phẩm thay thế đến. Căng thẳng cần tranh luận là các chu kỳ kinh phí hằng năm và áp lực tuyên bố một dự án "đã xong" lúc ra mắt so với quyền sở hữu toàn bộ vòng đời mà một dịch vụ an toàn thực sự đòi hỏi. Các góc hữu ích gồm liệu một đường ống CI/CD có giám sát và quay lui nhanh có được xem là biện pháp kiểm soát an toàn trực tiếp không, một ngân sách trực và lặp có sống sót sau lễ ăn mừng vận hành không, và một kế hoạch rút lui có được viết trong khi xây dựng hay ứng biến trong hoảng loạn. Một câu trả lời tốt gọi tên ai sở hữu dịch vụ trong vòng đời vận hành và mô tả một sự nghỉ hưu được kiểm soát, có thể kiểm toán thay vì hy vọng ai đó sẽ lo sau.

4. **Lần gần nhất chúng ta để thất bại của một nguyên mẫu dừng chúng ta là khi nào — và chúng ta có còn xây những thứ để vứt bỏ không?**
   Alpha tồn tại để giảm dần các giả định rủi ro nhất một cách rẻ, nghĩa là một nguyên mẫu dùng-một-lần thất bại đã làm đúng việc của nó: nó đã mua một bài học đắt trước khi tiền sản phẩm và bệnh nhân thật bị cam kết. Câu hỏi này thăm dò liệu một nhóm có thực sự xem alpha là học tập dùng-một-lần hay đã lặng lẽ trượt sang việc đánh bóng nguyên mẫu đầu tiên thành sản phẩm cuối cùng vì vứt mã đi cảm giác lãng phí — cái bẫy chi phí chìm biến một giai đoạn giảm rủi ro thành một cam kết đắt đỏ được đưa ra mù quáng. Căng thẳng đáng nêu ra là áp lực "có gì đó để trình" và tái sử dụng từng dòng đã viết so với kỷ luật chứng minh một giải pháp *có thể* hoạt động trước khi xây thứ thật trên hạ tầng sản phẩm. Các góc cụ thể gồm hỏi alpha gần nhất đã thực sự kiểm thử những giả định nào, có nguyên mẫu nào từng bị bỏ vì bằng chứng không, và bản dựng beta riêng tư có tái sử dụng mã dùng-một-lần lẽ ra phải viết lại theo chuẩn sản phẩm không. Một câu trả lời trung thực có thể chỉ ra một giả định cụ thể mà một nguyên mẫu đã giết hoặc xác nhận, và có thể phân biệt các hiện vật học tập mà nhóm sẵn lòng vứt bỏ với mã đã được đảm bảo mà nó hiện chạy trong Vận hành.

5. **Chúng ta chạy một mô hình lai trung thực, hay nhiều phương pháp ngụy trang lặng lẽ mâu thuẫn nhau?**
   Hầu hết các chương trình y tế lớn thực sự là lai — các nhóm sản phẩm agile hoạt động bên trong một lớp bọc cột mốc và kinh phí mà tổ chức và cơ quan quản lý của nó yêu cầu — và thất bại không phải bản thân mô hình lai mà là giả vờ nó là agile thuần túy hay thác nước thuần túy, khiến hai logic va chạm không được quản lý ở mọi cổng. Câu hỏi này yêu cầu một nhóm gọi tên nơi các cam kết cố định, tuần tự thực sự nằm (các đợt kinh phí, cột mốc quy định, đóng băng tích hợp) và nơi sự lặp lại thực sự diễn ra, thay vì để "agile" và "kế hoạch" mỗi bên tự nhận cả chương trình và làm bực mọi người. Sự đánh đổi cần tranh luận là nhu cầu chính đáng của tổ chức về các cột mốc có thể dự đoán và chi tiêu có thể kiểm toán so với nhu cầu của nhóm triển khai thay đổi phạm vi theo bằng chứng, và nước đi trung thực là làm các đường nối rõ ràng để cả hai có thể được lên kế hoạch xung quanh. Các góc hữu ích gồm liệu việc ưu tiên lại tồn đọng có bao giờ sống sót qua va chạm với kế hoạch chương trình không, các nhà cung cấp có được ký hợp đồng phạm vi cố định trong khi được yêu cầu làm việc lặp lại không, và báo cáo hội đồng thấy có khớp với cách công việc thực sự được làm không. Một câu trả lời tốt mô tả một mô hình lai được thiết kế có chủ đích với các điểm cố định có tên và không gian linh hoạt có tên, không phải một mớ hỗn độn trong đó một phương pháp được tuyên bố để cho có.

6. **Chúng ta biết rõ đến đâu dịch vụ vận hành đang thực sự làm gì với người dùng ngay lúc này — và chúng ta có nhận ra tác hại trước khi họ báo cáo không?**
   Một dịch vụ y tế vận hành chỉ an toàn bằng khả năng quan sát của nó: giám sát, cảnh báo và bản năng an toàn lâm sàng biến một số đo thành một mối nguy tạo nên sự khác biệt giữa bắt được một lỗi dữ liệu cũ trong vài phút và biết về nó từ một báo cáo sự cố nhiều tuần sau. Câu hỏi này xem xét liệu nhóm có thể thấy dịch vụ trong sản phẩm — tỷ lệ lỗi, thất bại tích hợp, sụt giảm khả năng tiếp cận, các khoảng cách công bằng chỉ lộ ra khi sử dụng thực — và liệu có ai đang theo dõi các bảng điều khiển với rủi ro lâm sàng trong đầu, không chỉ thời gian hoạt động của hạ tầng. Căng thẳng là chi phí và kỷ luật của khả năng quan sát và trực đúng nghĩa so với giả định ngầm "không có tin là tin tốt" khi một dịch vụ đã vận hành, trong một lĩnh vực an toàn then chốt chính là cách tác hại thầm lặng tích lũy. Các góc cụ thể gồm liệu nhật ký mối nguy có được cập nhật từ các sự cố trực tiếp không, các cảnh báo có ánh xạ tới tác động lâm sàng chứ không chỉ sức khỏe máy chủ không, và một bản phát hành xấu có thể được phát hiện và quay lui trước khi đến nhiều bệnh nhân không. Một câu trả lời trung thực mô tả các tín hiệu cụ thể nhóm theo dõi, một sự cố thực mà giám sát đã bắt (hoặc bỏ lỡ), và bằng chứng trực tiếp phản hồi vào lần lặp tiếp theo như thế nào.

## Trong thực tế: một ví dụ về y tế và chăm sóc

Một bệnh viện cộng đồng NHS đang thay thế một hệ thống giấy-và-bảng-tính cũ cho việc lên lịch thăm khám của điều dưỡng khu vực. Sau khám phá (Chủ đề 3.4), nhóm bước vào **alpha** và xây hai nguyên mẫu dùng-một-lần để kiểm thử các giả định rủi ro nhất: rằng điều dưỡng sẽ dùng điện thoại tại nhà bệnh nhân, và lịch có thể tích hợp với hồ sơ bệnh nhân điện tử. Một Cán bộ An toàn Lâm sàng được bổ nhiệm vào ngày đầu của alpha và mở một nhật ký mối nguy; một mối nguy sớm — một lịch cũ cho thấy một lần thăm đã được đồng nghiệp hoàn thành — thúc đẩy một quyết định thiết kế hiển thị trạng thái đồng bộ thời gian thực. DPIA, bắt đầu trong khám phá, đánh dấu rằng dữ liệu vị trí của nhân viên làm việc đơn độc cần một cơ sở pháp lý xác định và giới hạn lưu giữ.

Tại **đánh giá dịch vụ alpha-sang-beta**, một hội đồng độc lập thăm dò khả năng tiếp cận (điều dưỡng khiếm thị), bảo mật và lập luận của nhóm. Dịch vụ vượt qua kèm các hành động. Trong **beta riêng tư**, mười điều dưỡng dùng hệ thống thật trên hạ tầng sản phẩm; một đường ống CI/CD cho phép nhóm giao hằng ngày và quay lui một bản phát hành xấu trong dưới mười phút. Việc sử dụng làm lộ một vấn đề công bằng — nhân viên đại lý không có thiết bị của bệnh viện — dẫn đến một phương án dự phòng trên trình duyệt. **Beta công khai** mở rộng ra ba địa phương; báo cáo hồ sơ an toàn lâm sàng được hoàn tất và phê duyệt theo DCB0160 trước khi triển khai rộng hơn.

Dịch vụ **Vận hành** với một nhóm sản phẩm thường trực, bảng điều khiển giám sát và lịch trực. Mười tám tháng sau, khi bệnh viện áp dụng một nền tảng khu vực, lịch được **cho nghỉ hưu** theo kế hoạch: dữ liệu được di chuyển theo lịch lưu giữ, điều dưỡng được đào tạo lại và chuyển hướng, và nhật ký mối nguy cùng hồ sơ an toàn được lưu trữ để kiểm toán. Mỗi chuyển tiếp là một quyết định được bằng chứng hậu thuẫn, không phải một ngày trên biểu đồ Gantt.

## Góc nhìn theo khu vực

### Công ty khởi nghiệp

Vòng đời của một công ty khởi nghiệp được nén lại và phần lớn tự quản trị: không có hội đồng đánh giá dịch vụ độc lập, nên kỷ luật của các cổng Alpha–Beta–Vận hành phải tự áp đặt, nếu không nó sụp đổ thành "giao liên tục và hy vọng". Lợi thế là một nhóm nhỏ có thể chạy CI/CD thực sự từ ngày đầu và lặp nhanh hơn bất kỳ tổ chức lớn nào. Mối nguy là lặng lẽ bỏ các sợi chỉ an toàn lâm sàng và DPIA vì chưa có cơ quan quản lý nào dõi theo — một sai lầm chí mạng trong y tế, nơi nghĩa vụ DCB0129 gắn với nhà sản xuất bất kể quy mô công ty, và một mối nguy không được quản lý có thể kết thúc cả sản phẩm lẫn công ty. Các công ty khởi nghiệp nên áp dụng ý định của mô hình giai đoạn — bằng chứng trước khi phơi bày — ngay cả khi không có nghi thức, bổ nhiệm một Cán bộ An toàn Lâm sàng (thường bán thời gian) ngay khi một hình dạng giải pháp xuất hiện.

### Doanh nghiệp nhỏ

Một nhà cung cấp nhỏ đã thành lập — một phòng khám bác sĩ gia đình, hiệu thuốc cộng đồng, nhà dưỡng lão, hay phòng khám đơn lẻ — thường gặp vòng đời với tư cách là một *bên triển khai* hơn là bên xây dựng: nó đang mua hoặc cấu hình hệ thống của một nhà cung cấp, nên phê duyệt triển khai DCB0160 và một DPIA tại chỗ rơi vào nó ngay cả khi không có đội số nội bộ. Các giai đoạn vẫn áp dụng, nhưng được nén lại và thuê ngoài: "alpha" là một thí điểm có giám sát trên vài bệnh nhân thật, "beta" là một đợt triển khai theo giai đoạn trên cả phòng khám, và Vận hành là hoạt động thường lệ với các bản cập nhật của nhà cung cấp đến liên tục và phần lớn ngoài tầm kiểm soát của phòng khám. Tổ chức phải chỉ định một Cán bộ An toàn Lâm sàng (thường là một đối tác lâm sàng nhận vai trò ngoài công việc hằng ngày) và giữ một nhật ký mối nguy về cách hệ thống được *dùng* tại chỗ, vì công việc DCB0129 của nhà sản xuất không bao phủ các rủi ro đặc thù của việc triển khai. Với tiền mặt eo hẹp và không có CNTT chuyên trách, kỷ luật thực tế là dựa vào sự đảm bảo của nhà cung cấp trong khi sở hữu vài quyết định mà chỉ kiến thức địa phương mới đưa ra được — ai được đào tạo, phương án dự phòng khi hệ thống ngừng là gì, và dữ liệu bệnh nhân chảy trong môi trường cụ thể này như thế nào.

### Doanh nghiệp lớn

Một bệnh viện NHS hoặc nhà cung ứng lớn chạy vòng đời ở dạng đầy đủ, được đảm bảo nhất: đánh giá dịch vụ chính thức, một Cán bộ An toàn Lâm sàng có tên, phê duyệt triển khai DCB0160, hội đồng tư vấn thay đổi, và một chu kỳ kinh phí hằng năm mà công việc agile phải nằm trong. Thách thức đặc trưng là mô hình lai — các nhóm triển khai agile hoạt động bên trong một lớp bọc chương trình-và-cột mốc mà tổ chức và kiểm toán viên của nó yêu cầu — và thất bại kinh điển là "thác nước khoác áo agile", nơi các cổng lặng lẽ trở thành ngày trên lịch. Các doanh nghiệp lớn có nguồn lực để làm CI/CD, khả năng quan sát và các nhóm sản phẩm thường trực đúng cách, nhưng sức ì tổ chức và tích hợp cũ thường làm chậm triển khai đến mức bò. Trách nhiệm giải trình rộng và bán kính ảnh hưởng lớn, nên dốc theo giai đoạn từ beta riêng tư đến vận hành không phải sự thận trọng tùy chọn mà là biện pháp kiểm soát rủi ro thiết yếu.

### Chính phủ

Một cơ quan quốc gia triển khai dưới toàn bộ Tiêu chuẩn Dịch vụ, các đánh giá dịch vụ được công bố, kiểm soát chi tiêu và sự soi xét của Nghị viện, nên mọi cổng giai đoạn cũng là một điểm trách nhiệm giải trình công khai. Vòng đời ở đây dài và mức phơi bày rất lớn — một dịch vụ NHS toàn quốc đang vận hành có thể chạm đến hàng triệu người — nâng rủi ro của dốc theo giai đoạn, đảm bảo an toàn lâm sàng và việc cho nghỉ hưu các hệ thống cũ đang được thay thế. Các quy tắc mua sắm và các thỏa thuận kinh phí nhiều năm định hình "agile" có thể có nghĩa gì trong thực tế, và cho một hệ thống quốc gia nghỉ hưu (với hàng thập kỷ hồ sơ và nghĩa vụ lưu giữ luật định) tự nó là một chương trình lớn. Sự đánh đổi là đảm bảo so với tốc độ: triển khai của chính phủ bị đóng cổng nặng nề, bảo vệ an toàn và tiền công nhưng đòi hỏi nỗ lực có chủ đích để giữ các nhóm lặp lại thay vì quay về thiết kế-lớn-từ-đầu.

## Các kiểu thất bại thường gặp

- **Thác nước khoác áo agile.** Nhóm chạy "sprint" nhưng phạm vi, ngày và thiết kế đều đã cố định từ đầu; sự lặp lại là sân khấu. Giải pháp: để bằng chứng ở mỗi cổng thực sự thay đổi kế hoạch.
- **An toàn và quản trị thông tin gắn thêm ở cuối.** Hồ sơ an toàn lâm sàng và DPIA được viết vào tháng trước khi vận hành, chặn ra mắt hoặc tệ hơn, bị cho qua dưới áp lực. Giải pháp: mở nhật ký mối nguy và DPIA trong alpha và làm chúng trưởng thành liên tục.
- **Ra mắt một vụ nổ lớn.** Dịch vụ bỏ qua beta riêng tư/công khai và đi thẳng đến triển khai đầy đủ, phơi bày mọi người dùng trước phần mềm chưa được chứng minh. Giải pháp: dùng dốc theo giai đoạn; tăng mức phơi bày cùng với bằng chứng.
- **Dịch vụ Vận hành bị bỏ rơi.** Nhóm triển khai giải tán lúc vận hành; dịch vụ mục nát, và rủi ro lâm sàng tích lũy thầm lặng. Giải pháp: tài trợ một nhóm sản phẩm thường trực cho vòng đời vận hành.
- **Nhồi nhét cho đánh giá.** Các chuẩn bị bỏ qua cho đến khi đánh giá đến gần, rồi được đáp ứng qua loa. Giải pháp: mời những người rà soát đảm bảo và lâm sàng tham gia liên tục.
- **Không có kế hoạch rút lui.** Dịch vụ bị cho nghỉ hưu trong hoảng loạn khi sản phẩm thay thế đến, để lại dữ liệu và người dùng bị bỏ rơi. Giải pháp: lên kế hoạch cho nghỉ hưu như một giai đoạn hạng nhất.

## Mô hình trưởng thành

| Khía cạnh | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Điều phối |
|---|---|---|---|---|---|
| Kỷ luật giai đoạn | Ngẫu hứng; giai đoạn bị bỏ qua hoặc đổi tên | Giai đoạn có tên nhưng cổng theo lịch | Các cổng dựa trên bằng chứng chi phối chi tiêu và mức phơi bày | Quyết định cổng được theo dõi theo tiêu chí xác định; chi tiêu và mức phơi bày được báo cáo và đảm bảo | Kinh phí theo giai đoạn toàn danh mục; dịch vụ yếu bị dừng sớm |
| Phù hợp phương pháp | Một phương pháp bị ép lên mọi công việc | Dùng agile, nhưng trong phạm vi cố định cứng nhắc | Phương pháp khớp với sự bất định; mô hình lai được làm rõ | Mức phù hợp phương pháp được rà soát theo chỉ số triển khai; các đường nối của mô hình lai được quản trị và đo | Các nhóm điều chỉnh phương pháp liên tục khi sự bất định thay đổi |
| An toàn lâm sàng và quản trị thông tin | Được xử lý sau khi xây, nếu có | Nêu muộn; CSO/DPIA là một cuộc chạy đua lúc ra mắt | Nhật ký mối nguy, hồ sơ an toàn, DPIA được duy trì từ alpha | Mối nguy và biện pháp kiểm soát quản trị thông tin được theo dõi bằng KPI và đảm bảo theo mục tiêu | Bằng chứng an toàn và quản trị thông tin định hình thiết kế; phê duyệt là thường quy |
| CI/CD và vận hành | Triển khai thủ công, hiếm, rủi ro | Một số tự động hóa; bản phát hành chậm, đáng sợ | Đường ống tự động, giám sát, quay lui nhanh | Chỉ số triển khai và độ tin cậy (DORA) được theo dõi và quản lý theo mục tiêu | Giao hàng liên tục như một biện pháp kiểm soát an toàn; khả năng quan sát mạnh |
| Vận hành và nghỉ hưu | Không có nhóm thường trực; không có kế hoạch rút lui | Nhóm được giữ ngẫu hứng; nghỉ hưu được ứng biến | Nhóm sản phẩm được tài trợ; cho nghỉ hưu được lên kế hoạch | Hiệu suất vận hành và mức sẵn sàng nghỉ hưu được đo và quản trị | Quyền sở hữu toàn vòng đời; các lần nghỉ hưu được kiểm soát và kiểm toán |

## Danh sách kiểm tra

- [ ] Dịch vụ có một giai đoạn hiện tại rõ ràng (Khám phá / Alpha / Beta / Vận hành) và một quyết định tiếp theo có tên.
- [ ] Các chuyển tiếp giai đoạn được đóng cổng dựa trên bằng chứng, không phải ngày.
- [ ] Một Cán bộ An toàn Lâm sàng được bổ nhiệm và một nhật ký mối nguy được mở (DCB0129/0160) từ alpha trở đi.
- [ ] Một DPIA và đánh giá cơ sở pháp lý (Caldicott, UK GDPR) bắt đầu trong khám phá và được giữ cập nhật.
- [ ] Phương pháp triển khai khớp với mức bất định, và mọi sắp xếp lai đều rõ ràng.
- [ ] Các đánh giá dịch vụ được lên kế hoạch, và những người rà soát đảm bảo/bảo mật/khả năng tiếp cận được mời sớm.
- [ ] Một đường ống CI/CD có giám sát và quay lui nhanh được thiết lập trước beta công khai.
- [ ] Dịch vụ được phơi bày cho người dùng theo một dốc có giai đoạn (beta riêng tư → beta công khai → vận hành), không phải một vụ nổ lớn.
- [ ] Một nhóm sản phẩm thường trực được tài trợ cho vòng đời vận hành của dịch vụ (xem Chủ đề 5.0).
- [ ] Một kế hoạch cho nghỉ hưu bao phủ lưu giữ/di chuyển dữ liệu, chuyển hướng người dùng, và lưu trữ hồ sơ an toàn và kiểm toán.

## Nguồn chính

- Sổ tay Dịch vụ GOV.UK — các giai đoạn của một dự án agile (Khám phá, Alpha, Beta, Vận hành) và Tiêu chuẩn Dịch vụ Chính phủ.
- NHS England — Tiêu chuẩn Dịch vụ NHS và Sổ tay Dịch vụ Số của NHS; các đánh giá dịch vụ của NHS.
- NHS England Digital — DCB0129 (Clinical Risk Management: its Application in the Manufacture of Health IT Systems) và DCB0160 (its Application in the Deployment and Use of Health IT Systems).
- NHS England — Đảm bảo an toàn lâm sàng số; vai trò Cán bộ An toàn Lâm sàng, nhật ký mối nguy và báo cáo hồ sơ an toàn lâm sàng.
- NHS England — Tiêu chí Đánh giá Công nghệ Số (DTAC).
- Các Nguyên tắc Caldicott của Vương quốc Anh; Đạo luật Bảo vệ Dữ liệu 2018 / UK GDPR và đánh giá tác động bảo vệ dữ liệu.
- NICE — Khung Tiêu chuẩn Bằng chứng cho Công nghệ Y tế Số.
- Thực hành DevOps và giao hàng liên tục (ví dụ các năng lực DORA: tích hợp liên tục, tự động hóa triển khai, giám sát); hướng dẫn Sổ tay Dịch vụ GOV.UK về giao hàng liên tục và vận hành một dịch vụ.

## Tài liệu tham khảo

1. Systems development life cycle — Wikipedia — https://en.wikipedia.org/wiki/Systems_development_life_cycle
2. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
3. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
4. Software prototyping — Wikipedia — https://en.wikipedia.org/wiki/Software_prototyping
5. CI/CD — Wikipedia — https://en.wikipedia.org/wiki/CI/CD
6. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
7. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
8. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
9. Infrastructure as Code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
10. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
11. Privacy impact assessment (data protection impact assessment) — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
12. Agile delivery: the phases of an agile project — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/agile-delivery
13. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
14. Clinical risk management standards DCB0129 and DCB0160 — NHS England (Clinical Safety) — https://digital.nhs.uk/services/clinical-safety
15. DevOps Research and Assessment (DORA) capabilities — Google Cloud / DORA — https://dora.dev/
16. Continuous delivery — Jez Humble and David Farley — https://continuousdelivery.com/
17. Data protection impact assessments (DPIAs) — Information Commissioner's Office (ICO) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
18. Evidence standards framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
