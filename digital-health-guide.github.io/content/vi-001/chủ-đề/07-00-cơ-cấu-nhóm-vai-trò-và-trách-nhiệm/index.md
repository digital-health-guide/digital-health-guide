# Chủ đề 7.0 — Cơ cấu nhóm, vai trò và trách nhiệm

**Tóm lại trong một câu:** Giao hàng y tế số thành hay bại tùy cách bạn vạch ranh giới giữa các nhóm và mức độ rõ ràng bạn gọi tên ai làm gì — nên hãy cấu trúc các nhóm cho dòng chảy giá trị nhanh, an toàn, bố trí nhân sự đa ngành, và làm cho trách nhiệm rõ ràng.

## Vì sao điều này quan trọng trong y tế và chăm sóc

Cách bạn tổ chức các nhóm trở thành cách các dịch vụ của bạn hành xử. **[Định luật Conway](https://en.wikipedia.org/wiki/Conway%27s_law)** — rằng thiết kế của một hệ thống phản chiếu cấu trúc giao tiếp của tổ chức đã xây nó — không phải điều hiếu kỳ trong y tế và chăm sóc; nó là rủi ro an toàn bệnh nhân. Các nhóm phân mảnh tạo ra hồ sơ chăm sóc phân mảnh, tích hợp mong manh, và những lần bàn giao nơi rủi ro lâm sàng ẩn náu.

Trong NHS và chăm sóc xã hội bạn cũng đang chi tiền công và mang các nghĩa vụ luật định: an toàn lâm sàng theo DCB0129/DCB0160, quản trị thông tin theo UK GDPR và nghĩa vụ bảo mật theo thông luật, và nghĩa vụ về khả năng tiếp cận. Những nghĩa vụ này không thể gắn vào cuối. Chúng phải được đại diện *bên trong* nhóm, bởi những người có tên với thẩm quyền và thời gian để thực hiện chúng.

Làm đúng cấu trúc thì các nhóm đa ngành giao phần mềm chạy được mà bác sĩ tin và bệnh nhân dùng được. Làm sai thì bạn có những chuyên gia bận rộn tối ưu ống khói của riêng họ trong khi dịch vụ như một tổng thể đình trệ — mô thức kinh điển đằng sau các chương trình số trễ, vượt ngân sách và lặng lẽ bị bỏ rơi.

## Các khái niệm cốt lõi

**[Nhóm đa ngành](https://en.wikipedia.org/wiki/Interdisciplinarity) (MDT).** Một nhóm giao hàng số nên chứa mọi ngành cần thiết để thiết kế, xây và vận hành một dịch vụ mà không phụ thuộc bên ngoài liên tục — sản phẩm, giao hàng, thiết kế, nghiên cứu, kỹ thuật, dữ liệu, và các góc nhìn lâm sàng và quản trị. Điều này phản chiếu khái niệm MDT lâm sàng mà nhân viên đã biết: chuyên môn hỗn hợp, trách nhiệm chung về một kết quả.

**Team Topologies.** Một mô hình (Skelton & Pais) rút gọn thiết kế nhóm hiệu quả thành bốn loại cơ bản và ba chế độ tương tác, tất cả phục vụ *dòng chảy giá trị nhanh*:

- **Nhóm căn chỉnh theo dòng (stream-aligned)** — tổ chức quanh một dòng công việc có giá trị duy nhất (một dịch vụ, một hành trình người dùng, một sản phẩm) và sở hữu nó đầu cuối. Đây là loại nhóm mặc định; hầu hết mọi người nên ở trong một nhóm như vậy.
- **Nhóm nền tảng (platform)** — cung cấp năng lực tự phục vụ nội bộ (hạ tầng dùng chung, bộ máy tích hợp, dịch vụ đăng nhập, API hồ sơ chăm sóc dùng chung) để các nhóm căn chỉnh theo dòng đi nhanh hơn mà không phát minh lại chúng.
- **Nhóm hỗ trợ (enabling)** — một nhóm chuyên gia có thời hạn (ví dụ an toàn lâm sàng, khả năng tiếp cận, tự động hóa kiểm thử) huấn luyện người khác nâng một năng lực, rồi rút đi.
- **Nhóm hệ thống con phức tạp (complicated-subsystem)** — sở hữu một phần cần tri thức chuyên gia sâu (một thuật toán chấm điểm rủi ro, một giao diện NHS Spine) vốn sẽ quá tải một nhóm tổng quát.

Ba **chế độ tương tác** chi phối cách hai nhóm bất kỳ liên hệ: **cộng tác** (làm việc chặt chẽ trong một giai đoạn xác định, băng thông cao, chịu một số kém hiệu quả để khám phá), **X-như-một-dịch-vụ** (một nhóm tiêu thụ năng lực của nhóm khác với ít rắc rối, mặc định ma sát thấp ở quy mô lớn), và **hỗ trợ (facilitating)** (một nhóm giúp nhóm khác học). Gọi tên chế độ ngăn sự mơ hồ sinh ra trì hoãn và đổ lỗi.

**[Tải nhận thức](https://en.wikipedia.org/wiki/Cognitive_load).** Một nhóm chỉ giữ được trong đầu một lượng nhất định. Team Topologies lập luận rằng bạn nên giới hạn *miền* mỗi nhóm sở hữu ở mức nó có thể lập luận an toàn — một nguyên tắc quyết định khi miền là lâm sàng.

**Định luật Conway và Thao tác Conway Ngược.** Vì kiến trúc đi theo cấu trúc tổ chức — một góc nhìn [hệ thống xã hội-kỹ thuật](https://en.wikipedia.org/wiki/Sociotechnical_system) xem nhóm và công nghệ như một thiết kế — hãy chủ ý định hình các nhóm để tạo ra kiến trúc bạn muốn. Nếu bạn muốn một hồ sơ chăm sóc mô-đun, có khả năng tương tác, đừng xây nó bằng một nhóm nguyên khối.

## Thực hành tốt nhất

1. **Bố trí một nhóm đa ngành đầy đủ quanh mỗi dịch vụ.** Gồm, tối thiểu, một quản lý sản phẩm, một quản lý giao hàng, một nhà nghiên cứu người dùng, một nhà thiết kế dịch vụ/tương tác, các kỹ sư, và một năng lực dữ liệu/phân tích, cộng đầu vào an toàn lâm sàng và quản trị thông tin có tên. Một nhóm thiếu một ngành sẽ hoặc chờ người khác hoặc bỏ qua công việc đó — và công việc bị bỏ qua trong y tế thường là an toàn, khả năng tiếp cận hay quản trị.

2. **Làm cho hầu hết nhóm căn chỉnh theo dòng và trao họ quyền sở hữu đầu cuối.** Tổ chức quanh hành trình của người dùng (ví dụ "chuyển tuyến ngoại trú") thay vì một tầng công nghệ (ví dụ "nhóm cơ sở dữ liệu"). Quyền sở hữu đầu cuối rút ngắn vòng phản hồi và chặn các khoảng trống bàn giao nơi rủi ro lâm sàng tích tụ.

3. **Xây nền tảng như sản phẩm, tiêu thụ như một dịch vụ.** Xem bộ máy tích hợp, dịch vụ danh tính hay API hồ sơ chăm sóc dùng chung của bạn như một sản phẩm nội bộ với nhóm, lộ trình và người dùng riêng. Công bố nó "như-một-dịch-vụ" để các nhóm căn chỉnh theo dòng tự phục vụ, thay vì gửi phiếu và chờ.

4. **Dùng nhóm hỗ trợ để lan truyền chuyên môn khan hiếm, không phải để tích trữ nó.** Cán bộ an toàn lâm sàng, chuyên gia khả năng tiếp cận và kỹ sư bảo mật rất hiếm. Triển khai họ để huấn luyện các nhóm giao hàng đạt chuẩn cao hơn rồi chuyển đi, thay vì trở thành nút thắt vĩnh viễn mà mọi nhóm xếp hàng sau.

5. **Gọi tên rõ ràng mọi vai trò và quyền quyết định của nó.** Dùng một mô hình trách nhiệm — [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Thực hiện, Chịu trách nhiệm, Được tham vấn, Được thông báo) hoặc một sự chia "người quyết định/cố vấn" đơn giản hơn — cho các quyết định quan trọng: ký duyệt an toàn lâm sàng, vận hành, phê duyệt quản trị thông tin, chi tiêu. Sự mơ hồ ở đây là nơi trách nhiệm giải trình bốc hơi.

6. **Trao Cán bộ An toàn Lâm sàng thẩm quyền thực và thời gian thực.** DCB0129/0160 yêu cầu một Cán bộ An toàn Lâm sàng có tên, được đào tạo phù hợp, có thể dừng một bản phát hành. Làm cho vai trò rõ ràng trong nhóm, bảo vệ thời gian của nó, và bảo đảm nó có thể nói không — một CSO trên danh nghĩa là một thất bại quản trị đang chờ một sự cố phát hiện.

7. **Quản lý tải nhận thức bằng cách giới hạn miền.** Nếu một nhóm sở hữu quá nhiều dịch vụ hay một miền lâm sàng quá phức tạp, hãy tách nó. Canh chừng tín hiệu: một nhóm không còn tự tin giải thích được hệ quả an toàn của chính thay đổi của mình là bị quá tải.

8. **Áp dụng Thao tác Conway Ngược có chủ đích.** Vẽ ranh giới nhóm khớp với kiến trúc và khả năng tương tác bạn muốn — nhóm mô-đun cho hệ thống mô-đun, dựa trên chuẩn (ví dụ [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)). Đừng để một sơ đồ tổ chức tình cờ thiết kế hồ sơ chăm sóc của bạn thay bạn.

## Câu hỏi để thảo luận với nhóm của bạn

1. **Sơ đồ tổ chức hiện tại của chúng ta đã đang thiết kế kiến trúc cho chúng ta ở đâu — và đó có phải kiến trúc chúng ta thực sự muốn không?**
   Định luật Conway không tùy chọn: bất kể hình dạng nhóm của chúng ta, các hệ thống sẽ dần phản chiếu nó, nên bước đầu trung thực là nhìn vào hồ sơ chăm sóc, các tích hợp và các lần bàn giao chúng ta đã có và hỏi ranh giới nhóm nào đã tạo ra từng đường nối. Trong bối cảnh y tế và chăm sóc, những đường nối đó là nơi rủi ro lâm sàng ẩn náu — một hồ sơ phân mảnh, một giao diện Spine mong manh, một hồ sơ an toàn không nhóm đơn lẻ nào sở hữu — nên đây là cuộc trò chuyện về an toàn bệnh nhân, không phải thẩm mỹ. Căng thẳng cần tranh luận là vẽ lại ranh giới nhóm để có kiến trúc chúng ta muốn (Thao tác Conway Ngược) gây gián đoạn, đe dọa các lãnh địa đã thiết lập, và cắt ngang cấu trúc tài trợ và quản lý trực tiếp mà chúng ta có thể không kiểm soát đầy đủ. Hãy cân nhắc ánh xạ hai hoặc ba tích hợp đau đớn nhất của bạn ngược về các nhóm sở hữu mỗi đầu, và hỏi liệu một ranh giới căn chỉnh theo dòng có loại bỏ hoàn toàn việc bàn giao không. Một câu trả lời tốt gọi tên ít nhất một ranh giới cụ thể bạn sẽ dịch chuyển, trung thực về ai sẽ chống lại và vì sao, và phân biệt những thay đổi đáng gián đoạn với những thay đổi mà một giao diện như-một-dịch-vụ sẽ sửa ma sát rẻ hơn.

2. **Các chuyên gia khan hiếm của chúng ta — an toàn lâm sàng, quản trị thông tin, khả năng tiếp cận — có nằm trong các nhóm với thẩm quyền thực, hay là những cổng bên ngoài mà mọi người xếp hàng sau?**
   Mọi dịch vụ trong họ này mang các nghĩa vụ luật định (an toàn lâm sàng DCB0129/0160, UK GDPR và nghĩa vụ bảo mật theo thông luật, luật khả năng tiếp cận) không thể gắn vào cuối, thế nhưng những năng lực này hiếm và đắt, kéo các tổ chức về phía tích trữ chúng ở trung tâm. Sự đánh đổi là thật: nhúng một Cán bộ An toàn Lâm sàng vào mọi nhóm thì rải chuyên môn mỏng cho đến khi bị loãng; tập trung hóa nó thì tạo ra nút thắt anh hùng nơi một người được Tham vấn về mọi thứ và mọi bản phát hành phải chờ. Mô thức nhóm hỗ trợ — chuyên gia có thời hạn huấn luyện các nhóm tự chạy hội thảo mối nguy rồi rút đi — là giải pháp được đề xuất, nhưng nó chỉ hiệu quả nếu lãnh đạo bảo vệ thời gian của chuyên gia để dạy thay vì làm. Hãy nhìn trung thực lịch sử phát hành của bạn: bao nhiêu lần vận hành trượt vì chờ một người có tên, và người đó có thẩm quyền và thời gian được bảo vệ để nói không một cách an toàn không? Một câu trả lời mạnh đối mặt trực diện với sự khan hiếm, chọn một lập trường có chủ đích về nhúng-so-với-hỗ trợ cho từng nghĩa vụ, và gọi tên thẩm quyền cụ thể (quyền dừng một bản phát hành) không bao giờ được làm loãng dù bạn rải năng lực thế nào.

3. **Chúng ta sẽ biết bằng cách nào một nhóm đã nhận nhiều tải nhận thức hơn mức nó có thể mang an toàn — và chúng ta sẽ thực sự làm gì về nó?**
   Tải nhận thức là bộ điều tốc thầm lặng của giao hàng an toàn: một nhóm chỉ lập luận được về một lượng miền lâm sàng và số dịch vụ nhất định trước khi sự tự tin của nó vào hệ quả an toàn của các thay đổi của chính mình bắt đầu xói mòn, và trong y tế sự xói mòn đó vô hình cho đến khi một sự cố làm lộ nó. Khó khăn là quá tải hiếm khi tự thông báo — nó trông như giao hàng chậm hơn một chút, nhiều lỗi hơn, nhiều "để tôi hỏi người khác" hơn, và các nhóm dưới áp lực có xu hướng hấp thụ hơn là báo hiệu, đặc biệt khi tách một nhóm tốn kém về chính trị hay biên chế bị đóng băng. Tranh luận tín hiệu cảnh báo sớm của bạn sẽ là gì (một nhóm không còn tự tin giải thích hồ sơ an toàn cho bản phát hành của chính mình là một tín hiệu mạnh), và liệu hôm nay bạn có cơ chế nào sẽ làm lộ quá tải trước khi giao hàng đình trệ hiển nhiên. Hãy cân nhắc cả áp lực ngược: tách nhóm tạo ranh giới và bàn giao mới, nên thuốc chữa có thể đưa lại rủi ro phân mảnh của câu hỏi một. Một câu trả lời trung thực thỏa thuận các tín hiệu cụ thể, quan sát được thay vì "chúng tôi sẽ cảm nhận", gọi tên ai có thẩm quyền giới hạn miền của một nhóm hay tách nó, và thừa nhận sự đánh đổi giữa giảm tải và sinh sôi ranh giới.

4. **Năng lực dùng chung nào của chúng ta nên được vận hành như nền tảng tiêu thụ như một dịch vụ, và chúng ta có thực sự cấp nguồn lực cho chúng theo cách đó — hay chỉ gắn lại nhãn một hàng đợi phiếu?**
   Lời hứa của một nhóm nền tảng là các nhóm căn chỉnh theo dòng tự phục vụ một bộ máy tích hợp, dịch vụ danh tính hay API hồ sơ chăm sóc dùng chung mà không gửi phiếu và chờ, để cả hệ thống đi nhanh hơn; thất bại là gọi một thứ là "nền tảng" trong khi nó vẫn là một chức năng trung tâm thiếu nhân sự mà mọi người vẫn xếp hàng sau. Sự đánh đổi là thật: xây một năng lực thành sản phẩm nội bộ thực sự nghĩa là trao nó nhóm, lộ trình, tài liệu và người dùng riêng, một khoản đầu tư nghiêm túc cạnh tranh với việc giao tính năng hướng người dùng, và trong bối cảnh NHS hạn chế tiền khoản đầu tư đó dễ bị hoãn vô thời hạn. Trong y tế và chăm sóc rủi ro sắc hơn vì các năng lực dùng chung thường là những năng lực then chốt về an toàn — chỉ mục khớp người, giao diện FHIR, dấu vết kiểm toán — nơi một nhóm nền tảng mỏng trở thành điểm thất bại đơn lẻ cho mọi dịch vụ trên nó. Hãy nhìn các năng lực mà nhiều nhóm đã phụ thuộc và hỏi, với mỗi cái, tương tác có thực sự là X-như-một-dịch-vụ ma sát thấp hay một sự cộng tác ngụy trang với những lần chờ ẩn. Một câu trả lời trung thực gọi tên năng lực nào thực sự đáng đầu tư nền tảng bây giờ so với sau, rõ ràng ai tài trợ và bố trí nhân sự cho chúng, và cưỡng lại cám dỗ tuyên bố một nền tảng không có chủ sản phẩm, không có lộ trình và không có đường tự phục vụ.

5. **Chúng ta đang dựa vào nhà cung cấp hợp đồng hay nhân viên mượn ở đâu, và vai trò nào chúng ta phải giữ trong nội bộ để vẫn là một khách hàng thông minh thay vì một khách hàng bị khoét rỗng?**
   Nhiều giao hàng số trong y tế và chăm sóc được thuê ngoài, và một nhà cung cấp có thể mang năng lực và chuyên môn nhanh — nhưng nếu quyền sở hữu sản phẩm, đảm bảo kỹ thuật và ký duyệt an toàn lâm sàng đều rời tòa nhà cùng hợp đồng, tổ chức mất khả năng đánh giá điều nó đang được bán, đặc tả điều nó cần, hay sở hữu kết quả một cách an toàn. Căng thẳng là giữa tốc độ và năng lực: tăng cường nhân sự và các bản dựng chìa khóa trao tay đưa một thứ vào vận hành nhanh, nhưng chúng có thể lặng lẽ xói mòn cơ bắp nội bộ cho phép bạn buộc nhà cung cấp chịu trách nhiệm, và thường giao cấu trúc hình thành phần, nặng bàn giao hơn là các nhóm căn chỉnh theo dòng sở hữu một kết quả. Trong miền này các vai trò giữ lại không thể thương lượng tập trung quanh trách nhiệm không thể ủy quyền — Người Chịu trách nhiệm Cấp cao, Cán bộ An toàn Lâm sàng ký duyệt vận hành, chủ sản phẩm quyết định ưu tiên, và đủ đảm bảo kỹ thuật để kiểm tra những gì nhà cung cấp xây. Xem xét giao hàng hiện tại của bạn và hỏi năng lực nào bạn không thể tái lập nếu một nhà cung cấp bỏ đi vào ngày mai. Một câu trả lời tốt phân biệt công việc thực sự ổn để thuê với lõi khách hàng thông minh phải ở lại nội bộ, khăng khăng các nhóm hợp đồng bị giữ theo quyền sở hữu kết quả thay vì bố trí nhân sự kiểu cung cấp người, và gọi tên các quyết định an toàn và quản trị phải luôn thuộc về những người chịu trách nhiệm của chính bạn.

6. **Chúng ta sẽ biết bằng cách nào cơ cấu nhóm của mình thực sự tạo ra dòng chảy giá trị nhanh, an toàn — và điều gì sẽ kích hoạt chúng ta vẽ lại nó?**
   Thiết kế nhóm là phương tiện, không phải đích: điểm của các nhóm căn chỉnh theo dòng, nền tảng và các chế độ tương tác có tên là giao giá trị nhanh hơn, an toàn hơn, thế nhưng các tổ chức hiếm khi gắn công cụ đo xem cấu trúc có đang giao điều đó không, nên tái cơ cấu diễn ra theo chính trị và trực giác hơn bằng chứng. Khó khăn là chọn các tín hiệu phản ánh dòng chảy và an toàn mà không bị chơi — vận tốc thô hay thông lượng điểm câu chuyện mời gọi sai hành vi, trong khi các chỉ số dòng chảy (thời gian dẫn từ ý tưởng đến vận hành, tần suất triển khai, số lần bàn giao trên mỗi thay đổi) và chỉ báo an toàn (mối nguy được đóng nhanh thế nào, các nhóm có sở hữu hồ sơ an toàn của riêng họ không) cho bạn biết nhiều hơn liệu ranh giới đang giúp hay hại. Có một căng thẳng thực với sự ổn định: tái cơ cấu liên tục phá hủy tuổi thọ nhóm và không gian nhận thức chung vốn làm giao hàng an toàn, nên bạn cần một ngưỡng cao và các kích hoạt rõ ràng trước khi vẽ lại ranh giới. Thảo luận bằng chứng nào cho bạn biết một ranh giới sai — chờ đợi liên nhóm dai dẳng, một hồ sơ an toàn không nhóm đơn lẻ nào sở hữu, một nền tảng không ai tự phục vụ — và ai được trao quyền hành động theo nó. Một câu trả lời trung thực cam kết một tập nhỏ tín hiệu dòng chảy-và-an toàn bạn sẽ thực sự theo dõi, đặt một ngưỡng có chủ đích bảo vệ sự ổn định của nhóm, và gọi tên các điều kiện kích hoạt và người ra quyết định cho bất kỳ việc định hình lại nào trong tương lai.

## Trong thực tế: một ví dụ về y tế và chăm sóc

Một hệ thống chăm sóc tích hợp (ICS) đang triển khai một **hồ sơ chăm sóc dùng chung** khắp cấp cứu, cộng đồng, sức khỏe tâm thần, chăm sóc ban đầu và chăm sóc xã hội.

Bản năng là lập một "nhóm hồ sơ chăm sóc dùng chung" lớn. Thay vào đó ICS áp dụng Team Topologies. Một **nhóm nền tảng** sở hữu lõi của hồ sơ dùng chung: chỉ mục khớp người, các API FHIR và bộ máy tích hợp, được công bố như các năng lực tự phục vụ. Nhiều **nhóm căn chỉnh theo dòng** mỗi nhóm sở hữu một hành trình người dùng thực trên nó — "xem hồ sơ bệnh nhân ở khoa cấp cứu", "góc nhìn bảo vệ của nhân viên xã hội", "đối chiếu thuốc của bác sĩ gia đình" — và tiêu thụ nền tảng như-một-dịch-vụ. Một **nhóm hệ thống con phức tạp** sở hữu thuật toán khớp bệnh nhân xác suất, nơi một lần khớp sai là một sự cố an toàn thực sự. Một **nhóm hỗ trợ** gồm chuyên gia an toàn lâm sàng và khả năng tiếp cận luân phiên qua các nhóm căn chỉnh theo dòng, huấn luyện họ tự chạy hội thảo mối nguy DCB0160 thay vì làm hộ họ.

Mỗi nhóm có một quản lý sản phẩm, quản lý giao hàng và Cán bộ An toàn Lâm sàng có tên, và một RACI làm rõ rằng vận hành *chịu trách nhiệm* trước Người Chịu trách nhiệm Cấp cao nhưng *không thể tiến hành* nếu thiếu ký duyệt của CSO và IG. Khi nhóm cấp cứu cần một trường dữ liệu mới, chế độ tương tác rõ ràng: X-như-một-dịch-vụ từ nhóm nền tảng qua một yêu cầu API có tài liệu, không phải một sự cộng tác sáu tuần. Giao hàng nhanh hơn và, quan trọng, hồ sơ an toàn cho mỗi hành trình được sở hữu bởi nhóm giao nó.

## Góc nhìn theo khu vực

### Công ty khởi nghiệp

Một công ty khởi nghiệp y tế số mười người không thể bố trí bốn loại nhóm khác nhau — nó thường *là* một nhóm căn chỉnh theo dòng duy nhất trong đó một người đội nhiều mũ (một kỹ sư cũng chạy nghiên cứu người dùng, một người sáng lập là bác sĩ là Cán bộ An toàn Lâm sàng trên thực tế). Ưu tiên là giữ cả nhóm trong một không gian nhận thức chung để quyết định nhanh; một RACI chính thức là thừa khi mọi người ở cùng phòng. Rủi ro thực là nút thắt người sáng lập: an toàn lâm sàng và quản trị thông tin dựa vào một người bận rộn, và nghĩa vụ DCB0129/0160 dễ bị hoãn. Khi công ty giành hợp đồng NHS đầu tiên, những lần tuyển chuyên gia đầu tiên nên là những người giảm rủi ro cho cổng đó — một CSO có tên và một trưởng IG — trước khi mở rộng biên chế kỹ thuật.

### Doanh nghiệp nhỏ

Một nhà cung cấp nhỏ đã thành lập — một phòng khám bác sĩ gia đình, một hiệu thuốc cộng đồng, một nhà dưỡng lão hay một phòng khám đơn lẻ — có bệnh nhân thật và hoạt động đang diễn ra nhưng hiếm khi có nhóm số hay CNTT chuyên trách, nên không có "team topology" để thiết kế; quản lý phòng khám hay trưởng nhóm lâm sàng thực chất là toàn bộ năng lực giao hàng bên cạnh công việc ban ngày. Bước đi thực tế không phải xây nhóm nền tảng và hỗ trợ mà là gọi tên rõ ràng các trách nhiệm lên những người bạn đã có — ai là Cán bộ An toàn Lâm sàng cho các hệ thống bạn triển khai, ai sở hữu quản trị thông tin, ai ký duyệt một thay đổi — dù đó là những chiếc mũ bán thời gian trên một nhúm nhân viên. Vì cùng nghĩa vụ luật định (DCB0129/0160, UK GDPR, khả năng tiếp cận) áp dụng như với một quỹ lớn, mô thức thực tế là dựa vào các nền tảng dùng chung và hỗ trợ của nhà cung cấp và ICS của bạn thay vì phát minh lại, trong khi giữ lại vừa đủ năng lực khách hàng thông minh để buộc nhà cung cấp chịu trách nhiệm. Rủi ro lớn nhất là nút thắt một người: nếu người duy nhất hiểu hệ thống lâm sàng rời đi, cả an toàn lẫn liên tục đi theo họ, nên viết ra RACI và đào tạo chéo một người thứ hai quan trọng hơn bất kỳ mô hình nhóm chính thức nào ở đây.

### Doanh nghiệp lớn

Một bệnh viện NHS hay hãng công nghệ y tế lớn có vấn đề ngược lại: quá nhiều nhóm, vẽ dọc theo các đường thành phần và ban cũ, với bàn giao ở khắp nơi. Đây là nơi một mô hình thiết kế nhóm có chủ đích xứng đáng chỗ của nó — định hình lại các nhóm thành phần thành nhóm căn chỉnh theo dòng, dựng nhóm nền tảng cho năng lực hồ sơ chăm sóc dùng chung và tích hợp, và dùng nhóm hỗ trợ để lan truyền chuyên môn an toàn lâm sàng và khả năng tiếp cận khan hiếm. RACI và quyền quyết định rõ ràng trở nên thiết yếu vì số lượng khổng lồ các bên liên quan khiến phối hợp không chính thức bất khả. Thao tác Conway Ngược là đòn bẩy sống ở đây: một sơ đồ tổ chức hàng thập kỷ đã đang định hình kiến trúc, nên lãnh đạo phải vẽ lại ranh giới nhóm có chủ đích thay vì để cấu trúc thiết kế hồ sơ chăm sóc thay họ.

### Chính phủ

Một cơ quan quốc gia (NHS England, DHSC) hay chính quyền địa phương đặt ra các chuẩn người khác bố trí nhân sự theo — Khung Năng lực Số và Dữ liệu của Chính phủ, Service Standard, DCB0129/0160 — và chịu trách nhiệm trước Nghị viện và công chúng về cách tiền mua năng lực nhóm. Cấu trúc ở đây bị định hình bởi quy tắc mua sắm và tài trợ: nhiều giao hàng được thuê cho nhà cung cấp, nên các vai trò then chốt phải giữ nội bộ là những vai trò khách hàng thông minh (quyền sở hữu sản phẩm, đảm bảo kỹ thuật, ký duyệt an toàn lâm sàng) ngăn năng lực bị khoét rỗng. Trách nhiệm giải trình mang tính chính thức và kiểm toán được — một Người Chịu trách nhiệm Cấp cao có tên, kiểm soát chi tiêu được công bố, nghĩa vụ minh bạch — nên các mô hình trách nhiệm là vấn đề hồ sơ công, không phải vệ sinh tùy chọn. Rủi ro đặc trưng là cấu trúc hóa thạch thành các ban chương trình và cổng vĩnh viễn bóp nghẹt dòng chảy; nước đi ngược là buộc nhà cung cấp giữ các nhóm căn chỉnh theo dòng, sở hữu kết quả thay vì các xưởng cung cấp người.

## Các kiểu thất bại thường gặp

- **Cái bẫy nhóm thành phần.** Các nhóm chia theo tầng công nghệ ("nhóm front-end", "nhóm cơ sở dữ liệu") tạo bàn giao ở mọi tính năng và không sở hữu kết quả nào. Tổ chức lại quanh dòng giá trị.
- **Spotify sùng bái.** Sao chép "squads, tribes, chapters, guilds" như nhãn mà không có sự tự chủ, căn chỉnh và đầu tư nền tảng nền tảng. Mô hình Spotify là ảnh chụp của một công ty tại một thời điểm — ngay cả Spotify cũng đã đi tiếp. Vay mượn nguyên tắc, không phải sơ đồ tổ chức.
- **Nút thắt anh hùng.** Một CSO, một kiến trúc sư hay một trưởng IG là bên Được tham vấn về mọi thứ, nên mọi nhóm phải chờ. Chuyển họ thành một năng lực hỗ trợ nâng năng lực của mọi người.
- **Quản trị như điều nghĩ sau.** An toàn lâm sàng và IG được đại diện như cổng bên ngoài thay vì thành viên nhóm được nhúng, nên mối quan ngại của họ đến quá muộn để hành động rẻ.
- **Nhóm không giới hạn.** Một nhóm cứ hấp thụ dịch vụ cho đến khi không ai hiểu tổng thể. Quá tải nhận thức hiện ra như giao hàng chậm lại và sự tự tin về an toàn bị xói mòn.
- **Cộng tác vĩnh viễn.** Hai nhóm "cộng tác" vô thời hạn thường là thiếu một ranh giới. Đặt thời hạn cho cộng tác và chuyển sang một giao diện như-một-dịch-vụ sạch.

## Mô hình trưởng thành

| Khía cạnh | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Điều phối |
|---|---|---|---|---|---|
| Hình dạng nhóm | Chia theo thành phần công nghệ; bàn giao khắp nơi | Một số nhóm đa chức năng, vẫn nặng phụ thuộc | Nhóm căn chỉnh theo dòng sở hữu dịch vụ đầu cuối | Sức khỏe hình dạng nhóm được theo dõi theo chỉ số dòng chảy; bàn giao và ranh giới được rà soát theo nhịp | Ranh giới nhóm định hình kiến trúc có chủ đích (Conway Ngược) |
| Bố trí nhân sự đa ngành | Vai trò được mượn ngẫu hứng từ các ống khói | Vai trò cốt lõi hiện diện, lâm sàng/IG bán thời gian | MDT đầy đủ gồm CSO có tên với thẩm quyền | Khoảng trống nhân sự được đo so với đường cơ sở năng lực và cấp nguồn lực chủ động theo mục tiêu | Nhóm tự đánh giá và lấp khoảng trống năng lực chủ động |
| Sự rõ ràng của tương tác | Không xác định; leo thang theo quan hệ | Một số quy trình, vẫn là hàng đợi phiếu | Chế độ tương tác được gọi tên cho từng phụ thuộc | Ma sát phụ thuộc và thời gian chờ được đo; SLA và giao diện được quản lý theo mục tiêu | Chế độ được rà soát và tiến hóa; nền tảng ma sát thấp thống trị |
| Trách nhiệm | Không rõ ai quyết định | RACI tồn tại trên giấy | RACI sống và được dùng cho các quyết định chính | Thông lượng quyết định và độ trễ ký duyệt được theo dõi; trách nhiệm được đảm bảo qua kiểm toán | Quyền quyết định liên tục được tinh chỉnh để giảm trì hoãn |
| Tải nhận thức | Nhóm quá tải, sự tự tin về an toàn thấp | Tải được nhận ra nhưng không được quản lý | Miền được giới hạn theo năng lực nhóm | Tải được lượng hóa theo ngưỡng rõ ràng và quản trị như chỉ số được quản lý | Tải được giám sát chủ động; nhóm tách trước khi quá tải |

## Danh sách kiểm tra

- [ ] Mỗi dịch vụ có một nhóm căn chỉnh theo dòng sở hữu nó đầu cuối.
- [ ] Mỗi nhóm chứa, hoặc có tiếp cận có tên đến, sản phẩm, giao hàng, nghiên cứu, thiết kế, kỹ thuật, dữ liệu, an toàn lâm sàng và quản trị thông tin.
- [ ] Một Cán bộ An toàn Lâm sàng có tên, được đào tạo cho mỗi nhóm có thời gian được bảo vệ và thẩm quyền dừng một bản phát hành.
- [ ] Năng lực dùng chung (tích hợp, danh tính, API hồ sơ chăm sóc) được vận hành như nền tảng nội bộ tiêu thụ như một dịch vụ.
- [ ] Chuyên gia khan hiếm làm việc qua các nhóm hỗ trợ có thời hạn, không phải nút thắt vĩnh viễn.
- [ ] Một RACI (hoặc tương đương) tồn tại cho ký duyệt lâm sàng, vận hành, phê duyệt IG và chi tiêu, và thực sự được dùng.
- [ ] Mỗi phụ thuộc liên nhóm có một chế độ tương tác được gọi tên (cộng tác / X-như-một-dịch-vụ / hỗ trợ).
- [ ] Miền của nhóm được giới hạn ở tải nhận thức quản lý được; nhóm quá tải được tách.
- [ ] Ranh giới nhóm được chọn có chủ đích để tạo ra kiến trúc và khả năng tương tác bạn muốn.

## Nguồn chính

- Team Topologies — Matthew Skelton & Manuel Pais (bốn loại nhóm, ba chế độ tương tác, tải nhận thức): teamtopologies.com
- NHS Digital Service Standard và NHS Service Manual — vai trò nhóm đa ngành và phương thức làm việc
- GOV.UK Service Manual (GDS) — "Set up a service team" và hướng dẫn giao hàng linh hoạt
- Khung Năng lực Nghề nghiệp Số và Dữ liệu của Chính phủ (trước đây là DDaT): ddat-capability-framework.service.gov.uk
- Chuẩn Quản lý Rủi ro Lâm sàng DCB0129 (sản xuất) và DCB0160 (triển khai), NHS Digital — vai trò Cán bộ An toàn Lâm sàng
- Định luật Conway — Melvin Conway, "How Do Committees Invent?" (1968)
- Văn hóa kỹ thuật của Spotify (Henrik Kniberg) — squads/tribes/chapters/guilds, đọc có phê phán như một mô hình tại một thời điểm

## Tài liệu tham khảo

1. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
2. Cognitive load — Wikipedia — https://en.wikipedia.org/wiki/Cognitive_load
3. Responsibility assignment matrix (RACI) — Wikipedia — https://en.wikipedia.org/wiki/Responsibility_assignment_matrix
4. Interdisciplinarity — Wikipedia — https://en.wikipedia.org/wiki/Interdisciplinarity
5. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
6. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
7. Team Topologies: Organizing Business and Technology Teams for Fast Flow — Matthew Skelton & Manuel Pais — https://teamtopologies.com
8. NHS Service Manual and NHS Digital Service Standard — NHS England — https://service-manual.nhs.uk
9. Service Manual — Government Digital Service (GDS), GOV.UK — https://www.gov.uk/service-manual
10. Government Digital and Data Profession Capability Framework — GOV.UK — https://ddat-capability-framework.service.gov.uk
11. Clinical risk management standards DCB0129 and DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
12. "How Do Committees Invent?" (1968) — Melvin E. Conway — http://www.melconway.com/Home/Committees_Paper.html

*Xem thêm Chủ đề 7.2 — Hoạch định nguồn nhân lực, Chủ đề 7.3 — Chiến lược nguồn nhân lực, Chủ đề 7.5 — Phát triển con người và tổ chức, và Chủ đề 8.1 — Quản lý thay đổi.*
