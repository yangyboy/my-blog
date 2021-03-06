package tb.blog.server.data.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author TB
 */
@TableName("sys_user")
@Data
public class SysUserEntity extends BaseEntity {

    private String account;

    private String password;

    private String displayName;
}
