# Chủ đề 4.3 — Khả năng tương tác và chuẩn dữ liệu

**Trong y tế và chăm sóc, khả năng tương tác không phải sự tế nhị kỹ thuật mà là yêu cầu về an toàn lâm sàng và công bằng: khi các hệ thống không thể chia sẻ đúng dữ liệu, đúng hình thức, với ý nghĩa không mơ hồ, tại điểm chăm sóc, con người bị hại và bất bình đẳng bị khuếch đại.**

## Vì sao điều này quan trọng trong y tế và chăm sóc

Việc chăm sóc một người hiếm khi diễn ra ở một nơi. Một đợt bệnh đơn lẻ có thể chạm đến một phòng khám bác sĩ gia đình, một dịch vụ cứu thương, một khoa cấp cứu, một khoa bệnh viện, một điều dưỡng cộng đồng, một hiệu thuốc, một nhóm chăm sóc xã hội và một người chăm sóc tại nhà. Mỗi nơi nắm một phần của hồ sơ. Nếu những phần đó không thể được ghép lại một cách an toàn và nhanh chóng, bác sĩ đưa ra quyết định với thông tin thiếu: một dị ứng không được thấy, một loại thuốc bị kê trùng, một xét nghiệm lặp lại không cần thiết, một cờ bảo vệ người dễ bị tổn thương vô hình với nhóm cần nó.

Khả năng tương tác là điều biến một tập các hệ thống rời rạc thành thứ hành xử, từ góc nhìn của bệnh nhân, như một dịch vụ liền mạch. Đó là hạ tầng nằm dưới chăm sóc tích hợp. Khi nó hoạt động, một bác sĩ ở tổ chức này có thể thấy điều tổ chức khác đã ghi, và có thể tin rằng nó có nghĩa là điều họ nghĩ. Khi nó thất bại, sự thất bại thường im lặng cho đến khi có người bị hại.

Đây cũng là vấn đề công bằng. Những người có nhu cầu phức tạp nhất — người lớn tuổi yếu, người mắc nhiều bệnh mạn tính, người di chuyển giữa các dịch vụ — chính là những người có dữ liệu phân mảnh nhất. Khả năng tương tác kém do đó gây hại nhiều nhất cho người dễ tổn thương nhất. Và đó là vấn đề niềm tin công chúng: người ta chính đáng cho rằng NHS đã chia sẻ thông tin của họ một cách hợp lý, và bàng hoàng khi biết điều đó thường không đúng.

Cuối cùng, khả năng tương tác bảo vệ tiền công. Các hệ thống độc quyền không thể trao đổi dữ liệu nhốt các tổ chức vào những hợp đồng đắt, khó thay thế và buộc các tích hợp điểm-điểm tốn kém. Xây theo chuẩn mở là cách bạn giữ các lựa chọn mở, giữ nhà cung cấp trung thực, và tránh trả nhiều lần để giải quyết cùng một vấn đề.

## Các khái niệm cốt lõi

[Khả năng tương tác](https://en.wikipedia.org/wiki/Interoperability) là khả năng của các hệ thống khác nhau trao đổi thông tin và sử dụng nó. Hữu ích khi tách hai tầng. Khả năng tương tác cú pháp hay kỹ thuật nghĩa là hai hệ thống có thể trao đổi một thông điệp và mỗi bên phân tích được cấu trúc của nó — phong bì đến và mở được. [Khả năng tương tác ngữ nghĩa](https://en.wikipedia.org/wiki/Semantic_interoperability) nghĩa là hệ thống nhận hiểu nội dung có nghĩa giống bên gửi — rằng một mã cho "dị ứng penicillin" được diễn giải giống hệt ở cả hai phía. Tương tác kỹ thuật mà không có tương tác ngữ nghĩa là nguy hiểm: dữ liệu chảy, nhưng ý nghĩa bị mất hoặc méo mó.

Dữ liệu y tế được trao đổi bằng các chuẩn. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) là họ các chuẩn được dùng nhiều nhất trong y tế. Nhắn tin HL7 phiên bản 2 (v2) cũ hơn của nó, dùng văn bản phân tách bằng dấu gạch đứng và dấu mũ, vẫn nâng đỡ một lượng lớn nhắn tin bệnh viện và sẽ còn nhiều năm. Chuẩn hiện đại của nó, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), mô hình hóa thông tin lâm sàng dưới dạng "tài nguyên" được trao đổi qua [giao diện lập trình ứng dụng (API)](https://en.wikipedia.org/wiki/API) kiểu web, làm cho các lập trình viên hiện đại dễ làm việc hơn nhiều.

Chuẩn cho thông điệp là chưa đủ; bạn cũng cần các từ vựng chuẩn cho nội dung. [SNOMED CT (Danh pháp Có hệ thống của Y học — Thuật ngữ Lâm sàng)](https://en.wikipedia.org/wiki/SNOMED_CT) là thuật ngữ lâm sàng được bắt buộc khắp chăm sóc NHS để ghi chẩn đoán, triệu chứng, thủ thuật và hơn nữa. Từ điển NHS về thuốc và thiết bị (dm+d) là từ vựng chuẩn cho thuốc và thiết bị y tế, và nền tảng cho kê đơn điện tử. [Phân loại Bệnh tật Quốc tế, bản sửa đổi thứ 10 và 11 (ICD-10 và ICD-11)](https://en.wikipedia.org/wiki/ICD-11), do Tổ chức Y tế Thế giới duy trì, được dùng cho phân loại, thống kê và hoàn trả hơn là ghi chép lâm sàng hằng ngày. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) là một đặc tả mở để cấu trúc chính hồ sơ sức khỏe qua các "archetype" dùng chung, được quản trị về lâm sàng, và được một số tổ chức dùng để giữ mô hình dữ liệu lâm sàng độc lập với bất kỳ nhà cung cấp đơn lẻ nào.

Hai ý tưởng nền tảng nữa. [Số NHS](https://en.wikipedia.org/wiki/NHS_number) là mã định danh bệnh nhân chung cho phép các hồ sơ về cùng một người được liên kết đáng tin xuyên các tổ chức; thiếu một mã định danh chung, việc khớp là đoán mò. Và [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) công bố các "hồ sơ" (profile) quy định chính xác cách kết hợp các chuẩn hiện có để giải quyết các vấn đề cụ thể như chia sẻ tài liệu, để các nhà cung cấp khác nhau triển khai chúng giống nhau.

Nền tảng cho tất cả điều này là một lựa chọn chiến lược. Xây theo [chuẩn mở](https://en.wikipedia.org/wiki/Open_standard) với các API được công bố, tái sử dụng được giữ cho thị trường cạnh tranh và dữ liệu của bạn di động được. Dựa vào giao diện độc quyền tạo ra [sự khóa chặt vào nhà cung cấp](https://en.wikipedia.org/wiki/Vendor_lock-in), nơi đổi nhà cung cấp trở nên tốn kém đến mức bạn thực chất không thể. Tuy nhiên không điều nào mang lại giá trị nếu thiếu [chất lượng dữ liệu](https://en.wikipedia.org/wiki/Data_quality): dữ liệu chính xác, đầy đủ, kịp thời, mã hóa nhất quán là điều kiện tiên quyết của khả năng tương tác, không phải điều nghĩ sau.

## Thực hành tốt nhất

1. **Phân biệt khả năng tương tác ngữ nghĩa với kỹ thuật, và thiết kế cho cả hai.** Rất dễ ăn mừng rằng một thông điệp nay chảy giữa hai hệ thống và bỏ sót rằng bác sĩ nhận không thể dựa an toàn vào ý nghĩa của nó. Luôn hỏi: phía bên kia có diễn giải các mã, đơn vị và phủ định này giống hệt chúng ta không? Đầu tư vào thuật ngữ dùng chung (SNOMED CT, dm+d) và tập giá trị, không chỉ định dạng thông điệp, vì một dị ứng được truyền đúng nhưng bị hiểu sai nguy hiểm hơn không có thông điệp nào.

2. **Xây theo chuẩn mở và tái sử dụng nền tảng thay vì phát minh lại.** Áp dụng nguyên tắc được tán thành rộng rãi: xây theo chuẩn mở, và tái sử dụng các nền tảng và dịch vụ quốc gia hiện có trước khi tự xây. Trong NHS điều này nghĩa là ưu tiên API HL7 FHIR, dùng Số NHS làm mã định danh, và kết nối với các dịch vụ quốc gia như Spine, GP Connect và hồ sơ chăm sóc dùng chung thay vì tạo các liên kết điểm-điểm đặt riêng. Tái sử dụng giảm chi phí, chia gánh bảo trì, và nghĩa là dữ liệu của bạn có thể đi xa.

3. **Biến Số NHS thành không thể thương lượng trong mọi hồ sơ và thông điệp.** Liên kết hồ sơ đáng tin phụ thuộc vào một mã định danh chung đáng tin. Bảo đảm Số NHS được ghi nhận, xác minh với dịch vụ nhân khẩu quốc gia, và mang theo trên mọi hồ sơ và giao diện liên quan. Nơi nó thiếu hoặc chưa được xác minh, hãy xem đó là một lỗi chất lượng dữ liệu cần giải quyết, vì việc khớp chỉ theo tên và ngày sinh tạo ra cả những khớp sai nguy hiểm lẫn những liên kết bị bỏ sót.

4. **Xem chất lượng dữ liệu là một sản phẩm giao hạng nhất.** Khả năng tương tác xuất các vấn đề chất lượng dữ liệu của bạn cho mọi người ở hạ nguồn. Mô tả hồ sơ dữ liệu của bạn, đo độ đầy đủ và tính nhất quán mã hóa, và thiết lập quản lý để lỗi được tìm thấy và sửa tại nguồn. Sự trôi mã hóa, văn bản tự do nơi cần dữ liệu có cấu trúc, và đơn vị không nhất quán sẽ lặng lẽ làm hỏng mọi phân tích hạ nguồn và góc nhìn lâm sàng, nên hãy tài trợ công việc này một cách rõ ràng thay vì giả định nó tự xảy ra.

5. **Ưu tiên các kiến trúc API-trước, ghép lỏng hơn các tích hợp chặt.** Thiết kế sao cho các năng lực được phơi bày qua API được ghi chép tốt, có phiên bản mà người khác có thể tiêu thụ mà không cần thương lượng đặt riêng. Điều này chậm hơn lúc đầu so với một liên kết cơ sở dữ liệu trực tiếp, nhưng là điều cho phép bạn thay một thành phần mà không phải xây lại mọi thứ xung quanh. Nó cũng phù hợp với cách các dịch vụ quốc gia và nhà cung cấp hiện đại nay kỳ vọng tích hợp, và hỗ trợ các cách tiếp cận triển khai ở Chủ đề 3.5 — Vòng đời triển khai.

6. **Dùng hồ sơ (profile) được công bố và kiểm thử tuân thủ, không phải cách diễn giải địa phương.** Các chuẩn linh hoạt, và hai nhóm có thể triển khai "cùng một" tài nguyên FHIR một cách không tương thích. Áp dụng các hướng dẫn triển khai quốc gia và hồ sơ IHE ghim chặt các chi tiết, và yêu cầu nhà cung cấp chứng minh sự tuân thủ với chúng trước khi vận hành. Kiểm thử tuân thủ biến "chúng tôi hỗ trợ FHIR" — một tuyên bố gần như vô nghĩa khi đứng một mình — thành sự thật kiểm chứng được, có tính hợp đồng.

7. **Viết các yêu cầu về khả năng tương tác và chuẩn mở vào mua sắm và hợp đồng.** Thời điểm rẻ nhất để tránh khóa chặt là trước khi bạn ký. Yêu cầu API mở, được ghi chép, quyền trích xuất dữ liệu của chính bạn ở định dạng chuẩn, tuân thủ các chuẩn có tên, và không tính phí cho các tích hợp chuẩn. Làm việc với đồng nghiệp thương mại (xem Chủ đề 6.3 — Mua sắm và thương mại) để những điều này trở thành tiêu chí đánh giá bắt buộc, không phải khát vọng bị thương lượng bỏ đi sau.

8. **Quản trị khả năng tương tác với an toàn lâm sàng và quản trị thông tin có mặt trong phòng.** Mỗi luồng dữ liệu mới thay đổi rủi ro lâm sàng và cách xử lý thông tin bí mật. Đưa cán bộ an toàn lâm sàng và trưởng bộ phận quản trị thông tin vào các quyết định thiết kế ngay từ đầu, không phải như một chữ ký cuối cùng, để các hồ sơ dùng chung vừa an toàn vừa hợp pháp. Điều này nối trực tiếp với Chủ đề 1.6 — An toàn lâm sàng và quản lý rủi ro và Chủ đề 1.7 — Quản trị thông tin, bảo vệ dữ liệu và an ninh mạng.

## Câu hỏi để thảo luận với nhóm của bạn

1. **Trong các lộ trình chăm sóc của chúng ta, dữ liệu thiếu hoặc bị hiểu sai tạo ra rủi ro lâm sàng lớn nhất ở đâu hôm nay?** Đầu tư vào khả năng tương tác nên đi theo tác hại và giá trị, không phải mốt kiến trúc. Vẽ bản đồ các hành trình mà bệnh nhân phức tạp nhất của bạn thực sự đi qua và tìm các điểm bàn giao nơi thông tin bị mất, chậm, hoặc đến mà không có ý nghĩa đáng tin. Hỏi bác sĩ họ thường xuyên làm việc mù mịt ở đâu — các lần chuyển, khoảng trống ngoài giờ, ranh giới giữa y tế và chăm sóc xã hội. Phân biệt những nơi dữ liệu hoàn toàn không chảy với những nơi nó chảy nhưng không thể tin, vì chúng cần các cách sửa khác nhau. Hãy cân nhắc quần thể nào bị ảnh hưởng nhiều nhất, vì sự phân mảnh có xu hướng giáng nặng nhất lên người có nhu cầu phức tạp nhất. Câu trả lời cho bạn biết bắt đầu từ đâu, và trao cho bạn một lập luận an toàn lâm sàng có sức nặng hơn bất kỳ lập luận kỹ thuật nào.

2. **Chúng ta bị phơi bày với sự khóa chặt vào nhà cung cấp đến đâu, và chuyển các hệ thống lâm sàng chính của mình thực sự sẽ tốn bao nhiêu?** Nhiều tổ chức chỉ khám phá cái giá thực của một hệ thống đóng khi họ cố rời khỏi nó. Hãy đi qua, cụ thể, điều cần để trích xuất dữ liệu của bạn ở dạng dùng được, chuẩn và chuyển sang một nhà cung cấp khác. Xem xét hợp đồng của bạn để biết ai sở hữu dữ liệu, có những giao diện chuẩn nào, và liệu bạn có bị tính phí cho những tích hợp lẽ ra thường lệ không. Xác định các giao diện và định dạng dữ liệu độc quyền sẽ phải gỡ. Cân nhắc điều này với độ mở của các phương án thay thế và các nền tảng quốc gia bạn có thể tái sử dụng thay vì. Đây không phải về việc đổi nhà cung cấp liên tục; đó là về việc hiểu đòn bẩy của bạn và giảm rủi ro một lộ trình của nhà cung cấp trở thành lựa chọn duy nhất của bạn.

3. **Dữ liệu của chúng ta có đủ tốt để chia sẻ an toàn không, và làm sao chúng ta biết?** Chia sẻ dữ liệu kém không chỉ làm bạn bẽ mặt — nó lan truyền sai sót vào các quyết định của bác sĩ khác. Hỏi liệu bạn có thực sự đo độ đầy đủ, chính xác, kịp thời và nhất quán mã hóa của dữ liệu bạn định phơi bày không. Hãy thảo luận ai sở hữu chất lượng dữ liệu trong tổ chức của bạn và họ có thời gian cùng ủy nhiệm để sửa vấn đề tại nguồn không. Hãy cân nhắc tỷ lệ hồ sơ mang Số NHS đã xác minh và bao nhiêu thông tin lâm sàng quan trọng vẫn nằm trong văn bản tự do thay vì các trường được mã hóa. Hãy nghĩ bạn sẽ phát hiện một lỗi mã hóa có hệ thống trước khi nó đến một hồ sơ chăm sóc dùng chung bằng cách nào. Nếu bạn không thể trả lời các câu hỏi này bằng bằng chứng, hãy xem đó là một phát hiện tự nó, và tài trợ công việc chất lượng dữ liệu trước khi mở rộng đường ống.

4. **Khi một nhà cung cấp nói "chúng tôi hỗ trợ FHIR", chúng ta thực sự sẽ xác minh nó trước khi vận hành bằng cách nào?** Một nhãn chuẩn là một tuyên bố tiếp thị cho đến khi được kiểm thử trên một hướng dẫn triển khai cụ thể. Hãy thảo luận liệu tổ chức của bạn có bất kỳ năng lực kiểm thử tuân thủ nào của riêng mình không, hay chỉ đơn giản tin lời nhà cung cấp. Hai hệ thống có thể mỗi cái "tuân thủ FHIR" mà vẫn không thể trao đổi một thông điệp dùng được, vì chuẩn cố ý linh hoạt và ý nghĩa nằm trong các hồ sơ và tập giá trị ghim nó lại. Hỏi hướng dẫn triển khai quốc gia và hồ sơ IHE nào áp dụng cho giao diện đang bàn, và ai phía bạn có đủ năng lực đọc chúng. Hãy cân nhắc liệu sự tuân thủ có được viết vào hợp đồng như một điều kiện kết nối, hay được phát hiện đau đớn trong quá trình tích hợp. Một câu trả lời trung thực gọi tên hồ sơ cụ thể bạn sẽ kiểm thử, người hay chức năng sẽ chạy kiểm thử, và điểm trong lịch trình nơi một nhà cung cấp thất bại bị từ chối thay vì được cho qua.

5. **Ai sở hữu chuẩn, thuật ngữ và sự tuân thủ khắp tổ chức của chúng ta, và họ có ủy nhiệm để nói không không?** Khả năng tương tác phân rã nếu thiếu quản lý: tập giá trị trôi, hướng dẫn địa phương phân kỳ, và mỗi dự án mới lặng lẽ phát minh cách diễn giải riêng. Hỏi liệu có một chức năng có tên chịu trách nhiệm về chuẩn, các tập con SNOMED CT và dm+d, và sự tuân thủ, hay kiến thức này nằm trong đầu một vài cá nhân. Hãy cân nhắc căng thẳng giữa sự nhất quán trung tâm và tốc độ triển khai địa phương — các nhóm dưới áp lực sẽ xây thứ nhanh nhất trừ khi một chức năng chuẩn có thẩm quyền thực sự để yêu cầu tái sử dụng. Hãy thảo luận cách bảo trì thuật ngữ được tài trợ, vì nó kém hào nhoáng, liên tục, và có lợi cho mọi người hơn là bất kỳ dự án đơn lẻ nào. Hãy xem cách bạn giữ các triển khai căn chỉnh khi FHIR, SNOMED CT và các hướng dẫn quốc gia tiến hóa, thay vì đóng băng ở phiên bản bạn áp dụng ban đầu. Một câu trả lời trung thực xác định người sở hữu chịu trách nhiệm, kinh phí của họ, và một ví dụ gần đây khi họ hoặc thực thi một chuẩn hoặc thất bại.

6. **Những người mà hồ sơ của họ chúng ta đang ghép lại có được thông tin và hài lòng với cách dữ liệu của họ chảy không?** Khả năng tương tác không chỉ là vấn đề kỹ thuật và lâm sàng mà là câu hỏi về niềm tin công chúng và cơ sở pháp lý. Người ta chính đáng cho rằng NHS đã chia sẻ thông tin của họ một cách hợp lý, và bàng hoàng cả khi nó không làm vậy lẫn khi nó làm theo những cách họ không ngờ. Hãy thảo luận liệu bệnh nhân có hiểu tổ chức nào có thể thấy hồ sơ dùng chung của họ không, cơ chế Từ chối Dữ liệu Quốc gia hay mô hình đồng ý địa phương được tôn trọng xuyên luồng thế nào, và truy cập được ghi lại và kiểm toán được ra sao. Hãy cân nhắc chiều kích công bằng: những người có dữ liệu phân mảnh nhất — người có nhu cầu phức tạp — cũng là những người ít có khả năng nhất điều hướng việc từ chối và thông báo thông tin. Đưa quản trị thông tin và, khi liên quan, bệnh nhân hoặc đại diện của họ vào thiết kế thay vì xem sự đồng ý là một ô được đánh dấu ở cuối. Một câu trả lời trung thực có thể mô tả cơ sở pháp lý của từng luồng, cách một người sẽ biết ai đã xem hồ sơ của họ, và các lựa chọn của họ được tôn trọng đầu cuối ra sao.

## Trong thực tế: một ví dụ về y tế và chăm sóc

Một hệ thống chăm sóc tích hợp ở miền bắc nước Anh đặt ra mục tiêu trao cho bác sĩ một cái nhìn duy nhất về thuốc dùng chung qua phòng khám bác sĩ gia đình, bệnh viện và hiệu thuốc cộng đồng, sau khi một cuộc rà soát sự cố nghiêm trọng thấy một bệnh nhân đã được các nhóm không thể thấy hồ sơ của nhau kê hai loại thuốc tương tác nhau.

Cám dỗ là mua một "bảng điều khiển thuốc" từ một nhà cung cấp và nối nó trực tiếp vào cơ sở dữ liệu của từng hệ thống. Trưởng bộ phận khả năng tương tác cưỡng lại. Thay vào đó chương trình áp dụng cách tiếp cận xây-theo-chuẩn-mở. Mỗi hệ thống nguồn phơi bày dữ liệu thuốc dưới dạng tài nguyên HL7 FHIR; mỗi loại thuốc được mã hóa bằng dm+d để "cùng một loại thuốc" có nghĩa như nhau ở mọi nơi; và mỗi hồ sơ được khóa theo một Số NHS đã xác minh để đúng thuốc gắn với đúng người. Dữ liệu bác sĩ gia đình được lấy qua GP Connect thay vì một nguồn đặt riêng, tái sử dụng một năng lực quốc gia thay vì phát minh một cái địa phương.

Việc mô tả hồ sơ dữ liệu sớm chứng minh giá trị ngay lập tức. Hệ thống của một phòng khám đã ghi một số loại thuốc bằng văn bản tự do thay vì các mục dm+d được mã hóa, nghĩa là chúng sẽ vô hình với bất kỳ kiểm tra tương tác tự động nào. Điều này được sửa tại nguồn trước khi vận hành. Nhóm cũng tìm thấy một cụm hồ sơ có Số NHS chưa xác minh và định tuyến chúng qua dịch vụ nhân khẩu quốc gia để khớp.

Cán bộ an toàn lâm sàng và trưởng bộ phận quản trị thông tin là một phần của nhóm thiết kế xuyên suốt. Cùng nhau họ xác định chính xác dữ liệu nào được chia sẻ, với ai, theo cơ sở pháp lý nào, và truy cập của bác sĩ được ghi lại ra sao — những mối quan tâm của Chủ đề 1.7 — Quản trị thông tin, bảo vệ dữ liệu và an ninh mạng. Nhà cung cấp phải vượt qua kiểm thử tuân thủ với hướng dẫn triển khai FHIR quốc gia trước khi kết nối. Mười hai tháng sau, cái nhìn thuốc liền mạch đã vận hành, một tương tác mà trước đây sẽ bị bỏ sót đã được bắt, và — vì mọi thứ được xây trên giao diện mở — một trường hợp sử dụng thứ hai, thông tin dị ứng dùng chung, tái sử dụng phần lớn cùng hạ tầng với một phần nhỏ chi phí ban đầu.

## Góc nhìn theo khu vực

### Công ty khởi nghiệp

Một công ty khởi nghiệp y tế số sống hay chết nhờ việc nó cắm vào các hệ thống hiện có dễ đến đâu, nên hãy xem khả năng tương tác là một tính năng cốt lõi, không phải việc vặt tuân thủ. Xây API FHIR và dùng SNOMED CT và dm+d ngay từ đầu làm bạn dễ được mua và tích hợp hơn nhiều, và báo hiệu sự trưởng thành cho những người mua NHS thận trọng. Cưỡng lại sự thôi thúc phát minh mô hình dữ liệu của riêng bạn khi một chuẩn đã tồn tại; sự khác biệt của bạn nên là sản phẩm, không phải một định dạng độc quyền trở thành trách nhiệm pháp lý. Làm đúng việc xử lý Số NHS và quản trị thông tin sớm là điều cho phép bạn đi từ thí điểm đến mua sắm. Thiết kế để một khách hàng, về nguyên tắc, có thể trích xuất dữ liệu của họ và rời đi — nghịch lý là sự cởi mở đó chính là điều giành được niềm tin giữ họ lại.

### Doanh nghiệp nhỏ

Một nhà cung cấp nhỏ đã thành lập — một phòng khám bác sĩ gia đình, một hiệu thuốc cộng đồng, một nhà dưỡng lão, hoặc một phòng khám đơn lẻ — mang cùng nghĩa vụ chia sẻ dữ liệu an toàn như bệnh viện lớn nhất, nhưng với một phần nhỏ năng lực kỹ thuật. Ở đây khả năng tương tác chủ yếu là một kỷ luật mua sắm và cấu hình hơn là kỹ thuật: chọn các hệ thống đã nói được FHIR, kết nối với các dịch vụ quốc gia như GP Connect và Spine, và mã hóa bằng SNOMED CT và dm+d ngay từ đầu, để bạn thừa hưởng chuẩn thay vì xây chúng. Biến việc ghi nhận Số NHS đã xác minh thành một phần của thực hành hằng ngày, vì không có nhóm tích hợp để đối chiếu các sai lệch về sau, làm đúng mã định danh ngay lúc đăng ký là biện pháp bảo vệ rẻ nhất của bạn. Dựa vào các chương trình hồ sơ chăm sóc dùng chung và hạ tầng dùng chung của hệ thống chăm sóc tích hợp của bạn thay vì đặt hàng các liên kết đặt riêng mà bạn không thể bảo trì. Khi bạn ký hoặc gia hạn hợp đồng một hệ thống, hãy khăng khăng quyền trích xuất dữ liệu và giao diện mở bằng ngôn từ rõ ràng, vì một tổ chức nhỏ cảm nhận sự khóa chặt nhà cung cấp sắc nhất và có ít đòn bẩy nhất để thoát sau sự việc.

### Doanh nghiệp lớn

Một nhà cung cấp hoặc nhà cung ứng lớn thường mang hàng thập kỷ hệ thống cũ: các giao diện HL7 v2, nhiều hệ thống hồ sơ điện tử, và các bộ máy tích hợp giữ tất cả với nhau. Chiến lược thực tế không phải xé bỏ mọi thứ mà là đặt một lớp dựa trên chuẩn, API-trước trước hệ thống, di chuyển dần các luồng sang FHIR trong khi giữ v2 chạy nơi buộc phải. Đề phòng sự khóa chặt nghiêm ngặt ở mỗi lần gia hạn, và khăng khăng kiểm thử tuân thủ để "tuân thủ chuẩn" được xác minh thay vì chỉ khẳng định. Thiết lập một chức năng chuẩn và tuân thủ nội bộ để các dự án riêng lẻ không mỗi cái phát minh cách diễn giải riêng. Điều này liên quan chặt chẽ đến cách bạn quản lý các nền tảng vận hành cốt lõi trong Chủ đề 5.4 — Hoạch định nguồn lực doanh nghiệp (ERP), nơi cùng kỷ luật tái sử dụng và giao diện mở áp dụng.

### Chính phủ

Các cơ quan quốc gia và khu vực đặt ra luật chơi của thị trường, nên các lựa chọn của họ về chuẩn lan khắp mọi tổ chức. Điều giá trị nhất chính phủ có thể làm là bắt buộc chuẩn mở, công bố các hướng dẫn triển khai và yêu cầu tuân thủ rõ ràng, và cung cấp các nền tảng quốc gia tái sử dụng được — Spine, GP Connect, các khung hồ sơ chăm sóc dùng chung, dịch vụ Số NHS — để các tổ chức địa phương xây một lần và tái sử dụng. Sự nhất quán quan trọng hơn sự hoàn hảo: một chuẩn đủ tốt được thực thi vững chắc thắng một chuẩn vượt trội về lý thuyết mà mọi người triển khai khác nhau. Chính phủ cũng phải tài trợ công việc kém hào nhoáng của bảo trì thuật ngữ và cải thiện chất lượng dữ liệu, vì đây là các lợi ích công cộng mà không tổ chức đơn lẻ nào sẽ tài trợ một mình. Vai trò quản lý này nối với Chủ đề 9.1 — Làm việc với chính quyền địa phương và quốc gia và với cách các đối tác hợp tác trong Chủ đề 9.0 — Hợp tác với các tổ chức đối tác.

## Các kiểu thất bại thường gặp

- **Nhầm kết nối kỹ thuật với hiểu biết ngữ nghĩa.** Tuyên bố chiến thắng khi một thông điệp chảy, mà không xác nhận cả hai bên diễn giải các mã, đơn vị và phủ định giống hệt nhau. Kết quả là dữ liệu trông được tích hợp nhưng lặng lẽ bị đọc sai.
- **Chia sẻ dữ liệu kém nhanh hơn.** Mở rộng đường ống trước khi sửa chất lượng dữ liệu, để lỗi mã hóa, văn bản tự do và Số NHS thiếu lan truyền vào các quyết định của bác sĩ khác và mọi phân tích hạ nguồn.
- **"Chúng tôi hỗ trợ FHIR" như một tuyên bố rỗng.** Chấp nhận một nhãn chuẩn mà không kiểm thử tuân thủ trên một hướng dẫn triển khai cụ thể, nên hai hệ thống "tuân thủ" vẫn không thể nói chuyện với nhau.
- **Tích hợp điểm-điểm đặt riêng.** Xây liên kết trực tiếp giữa từng cặp hệ thống, tạo ra một mạng mong manh trở nên khó và đắt bảo trì theo cấp số nhân khi nó lớn.
- **Khóa chặt theo mặc định.** Ký hợp đồng với giao diện độc quyền và không có quyền trích xuất dữ liệu, chỉ khám phá cái giá của cái bẫy khi bạn cố đổi nhà cung cấp.
- **Xem quản trị như cổng cuối.** Đưa an toàn lâm sàng và quản trị thông tin vào chỉ để phê duyệt, nên vấn đề lộ ra muộn và tốn kém, hoặc bị cho qua dưới áp lực triển khai.
- **Chuẩn không có quản lý.** Áp dụng thuật ngữ và hồ sơ nhưng không tài trợ ai để bảo trì tập giá trị, giám sát tuân thủ, hay giữ các triển khai căn chỉnh khi chuẩn tiến hóa.

## Mô hình trưởng thành

| Khía cạnh | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Điều phối |
|---|---|---|---|---|---|
| Áp dụng chuẩn | Ngẫu hứng, chủ yếu giao diện độc quyền hoặc tự chế | HL7 v2 và một số FHIR được dùng; lựa chọn thay đổi theo dự án | FHIR, SNOMED CT và dm+d được áp dụng làm mặc định cùng hướng dẫn địa phương | Sự tuân thủ hướng dẫn quốc gia được theo dõi và báo cáo; sai lệch được quản trị và đảm bảo | Tuân thủ đầy đủ hướng dẫn triển khai quốc gia và hồ sơ IHE, được xác minh bằng kiểm thử |
| Mã định danh và liên kết | Số NHS thường thiếu hoặc chưa xác minh | Được ghi nhận nhưng không xác minh nhất quán | Xác minh với dịch vụ quốc gia trên hầu hết hồ sơ | Tỷ lệ xác minh được đo theo mục tiêu, với hồ sơ chưa khớp được xử lý chủ động | Xác minh ở mọi nơi; chất lượng khớp được giám sát chủ động |
| Chất lượng dữ liệu | Không đo; văn bản tự do phổ biến nơi cần mã hóa | Đo ở một số nơi; sửa theo phản ứng | Được mô tả, có người sở hữu, và cải thiện tại nguồn | Chỉ số chất lượng được theo dõi theo ngưỡng, với việc quản lý được buộc giải trình | Giám sát liên tục với phát hiện lỗi tự động trước khi dữ liệu được chia sẻ |
| Kiến trúc | Điểm-điểm, ghép chặt | Bộ máy tích hợp, ghép hỗn hợp | API-trước, tái sử dụng nền tảng quốc gia | Hiệu suất API và phụ thuộc được giám sát; thay đổi được quản trị qua phiên bản và kiểm thử | Ghép lỏng, dựa trên chuẩn, thành phần thay thế được mà không làm lại |
| Khóa chặt và mua sắm | Hợp đồng độc quyền, không có quyền rút lui | Một số điều khoản chuẩn, thực thi yếu | Yêu cầu chuẩn mở và quyền trích xuất dữ liệu | Sự tuân thủ hợp đồng và mức sẵn sàng rút lui được rà soát và đảm bảo xuyên danh mục | Giao diện mở bắt buộc và được xác minh; nhà cung cấp thực sự thay thế được |

## Danh sách kiểm tra

- [ ] Mọi hồ sơ và giao diện liên quan mang một Số NHS đã xác minh, với một quy trình giải quyết các số thiếu hoặc chưa khớp.
- [ ] Giao diện mới dùng HL7 FHIR và các hướng dẫn triển khai quốc gia có tên, với HL7 v2 chỉ được giữ nơi chưa biện minh được việc di chuyển.
- [ ] Nội dung lâm sàng được mã hóa bằng SNOMED CT, và thuốc bằng dm+d, theo các tập giá trị đã thỏa thuận.
- [ ] Chất lượng dữ liệu của bất cứ thứ gì bạn định chia sẻ được mô tả, đo, có người sở hữu, và cải thiện tại nguồn trước khi mở rộng đường ống.
- [ ] Nhà cung cấp phải vượt qua kiểm thử tuân thủ với một hồ sơ cụ thể trước khi kết nối — "hỗ trợ FHIR" không bao giờ được chấp nhận một mình.
- [ ] Các nền tảng quốc gia (Spine, GP Connect, hồ sơ chăm sóc dùng chung) được tái sử dụng trước khi xây bất kỳ tích hợp đặt riêng nào.
- [ ] Hợp đồng bắt buộc API mở, được ghi chép, quyền trích xuất dữ liệu ở định dạng chuẩn, và không tính phí cho các tích hợp chuẩn.
- [ ] Trưởng bộ phận an toàn lâm sàng và quản trị thông tin có mặt trong nhóm thiết kế từ đầu, không chỉ lúc phê duyệt.
- [ ] Kiến trúc là API-trước và ghép lỏng, để một thành phần có thể được thay thế mà không phải xây lại mọi thứ xung quanh.
- [ ] Một chức năng có tên sở hữu chuẩn, sự tuân thủ và bảo trì thuật ngữ khắp tổ chức.

## Nguồn chính

- NHS England — các chuẩn khả năng tương tác, Spine, GP Connect và các chương trình hồ sơ chăm sóc dùng chung.
- HL7 International — chuẩn FHIR và các đặc tả HL7 v2.
- SNOMED International — thuật ngữ SNOMED CT và hướng dẫn triển khai.
- Cơ quan Dịch vụ Kinh doanh NHS — Từ điển về thuốc và thiết bị (dm+d).
- Integrating the Healthcare Enterprise (IHE) — các hồ sơ tương tác.
- openEHR International — các đặc tả mở để cấu trúc hồ sơ sức khỏe.
- Tổ chức Y tế Thế giới — Phân loại Bệnh tật Quốc tế (ICD-10 và ICD-11).

## Tài liệu tham khảo

1. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
2. Semantic interoperability — Wikipedia — https://en.wikipedia.org/wiki/Semantic_interoperability
3. Health Level 7 — Wikipedia — https://en.wikipedia.org/wiki/Health_Level_7
4. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
5. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
6. ICD-11 — Wikipedia — https://en.wikipedia.org/wiki/ICD-11
7. ICD-10 — Wikipedia — https://en.wikipedia.org/wiki/ICD-10
8. openEHR — Wikipedia — https://en.wikipedia.org/wiki/OpenEHR
9. NHS number — Wikipedia — https://en.wikipedia.org/wiki/NHS_number
10. Integrating the Healthcare Enterprise — Wikipedia — https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise
11. Open standard — Wikipedia — https://en.wikipedia.org/wiki/Open_standard
12. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
13. API — Wikipedia — https://en.wikipedia.org/wiki/API
14. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
15. FHIR standard — HL7 International — https://www.hl7.org/fhir/
16. SNOMED CT — SNOMED International — https://www.snomed.org/
17. Dictionary of medicines and devices (dm+d) — NHS Business Services Authority — https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/dictionary-medicines-and-devices-dmd
18. GP Connect — NHS England Digital — https://digital.nhs.uk/services/gp-connect
19. Spine — NHS England Digital — https://digital.nhs.uk/services/spine
20. International Classification of Diseases (ICD) — World Health Organization — https://www.who.int/standards/classifications/classification-of-diseases
